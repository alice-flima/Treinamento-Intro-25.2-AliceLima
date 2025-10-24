// import ProdutoService from '@/app/(backend)/services/Produtos'; 
// import { toErrorMessage } from '@/utils/api/toErrorMessage';
// import { Prisma } from '@/generated/prisma';
// import { NextRequest, NextResponse } from 'next/server'

// /////////////////
// export async function GET() {
//   try {
//     const produtos = await ProdutoService.getAll();
//     return NextResponse.json(produtos, { status: 200 });
//   } catch {
//     return NextResponse.json(
//       toErrorMessage('Falha ao buscar produtos'),
//       { status: 500 }
//     );
//   }
// }
// export async function DELETE(request: Request, context: { params: { id: string } }){
//   try {
//     const{id} = context.params;
//     const produtos = await ProdutoService.delete(id);
//     return NextResponse.json(produtos, { status: 200 });
//   } catch {
//     return NextResponse.json(
//       toErrorMessage('Erro'),
//       { status: 500 }
//     );
//   }
// }
// export async function PATCH(request: Request, context: { params: { id: string } }) {
//   const{id} = context.params;
//   const data: Prisma.ProdutoUpdateInput = await request.json();
//   try {
//     const produto = await ProdutoService.update(id, data);
//     return NextResponse.json(produto, { status: 200 });
//   }
//  catch {
//     return NextResponse.json(
//       toErrorMessage('Erro'),
//       { status: 500 }
//     );
// };
// }
