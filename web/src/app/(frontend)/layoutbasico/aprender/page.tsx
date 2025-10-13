import ProdutoCards from './criaprodutocard';
import ProdutoCard from './interfacedosprodutos';

const paotradicional: ProdutoCard = {
  id: 1,
  nome: "Pão Tradicional", 
  preco: 5.00, 
  quantidade: 0, 
  descricao: "O mais clássico",
};

export default function Page({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
      </header>
      <main>
        <ProdutoCards produto={paotradicional}  />
        {children}
      </main>
    </>
  );
}
