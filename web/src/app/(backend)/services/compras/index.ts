import prisma from "../db"; 
import { Compra, Produto, Prisma } from '@/generated/prisma';

interface CriarCompraProdutoData {
    produtoId: string;
}

export class CompraService {

    public async create(userId: string, itensCompraProduto: CriarCompraProdutoData[]): Promise<Compra> {
        
        return prisma.$transaction(async (tx) => {
            
            const produtoIds = itensCompraProduto.map(item => item.produtoId);
            const produtos = await tx.produto.findMany({ 
                where: { id: { in: produtoIds } },
                select: { id: true, preco: true }
            });
            const precoMap = new Map(produtos.map(p => [p.id, p.preco]));
            let precoTotal = 0;
            for (const item of itensCompraProduto) {
                const precoProduto = precoMap.get(item.produtoId);
                  if(precoProduto){
                precoTotal += precoProduto; 
                  };
            }
            const novaCompra = await tx.compra.create({
                data: {
                    userId: userId,
                    precoTotal: precoTotal,
                }
            });
            const createProdutoPromises = itensCompraProduto.map(dadosProduto => {
                return tx.compraProduto.create({
                    data: {
                        compraId: novaCompra.id,
                        produtoId: dadosProduto.produtoId,
                    }
                });
            });
            await Promise.all(createProdutoPromises);
            return novaCompra;
        });
    }
    public async getById(id: string): Promise<Compra | null> {
        return prisma.compra.findUnique({
            where: { id },
            include: {
                user: true,
                produtos: true,
            }
        });
    }
    public async update(id: string, data: Prisma.CompraUpdateInput): Promise<Compra> {
        return prisma.compra.update({
            where: { id },
            data,
        });
    }
    public async delete(id: string): Promise<Compra> {
        return prisma.$transaction(async (tx) => {
            await tx.compraProduto.deleteMany({
                where: { compraId: id },
            });
            return tx.compra.delete({
                where: { id },
            });
        });
    }
}
export default new CompraService();