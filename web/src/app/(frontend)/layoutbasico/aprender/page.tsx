'use client';
import { useState } from 'react';
import ProdutoCards from './criaprodutocard';
import ProdutoCard from './interfacedosprodutos';
export default function Page({ children }: Readonly<{ children: React.ReactNode }>) {
const [itensCarrinho, setitensCarrinho] = useState(0);
const [Preco, setPreco] = useState(0);
function atualizarCarrinho(preco: number, adicionar: boolean) {
    if (adicionar) {
      setitensCarrinho(itensCarrinho + 1);
      setPreco(Preco + preco);
    } else {
      setitensCarrinho(itensCarrinho - 1);
      setPreco(Preco - preco);
    }
  }

  const paotradicional: ProdutoCard = {
  id: 1,
  nome: "Pão Tradicional", 
  preco: 5.00, 
  quantidade: 0, 
  descricao: "O mais clássico",
};
const paoaustraliano: ProdutoCard = {
  id: 2,
  nome: "Pão Australiano", 
  preco: 5.00, 
  quantidade: 0, 
  descricao: "Mais chique",
};


  return (
    <>
      <header>
      </header>
      <main>
        <ProdutoCards produto={paotradicional} atualizarCarrinho={atualizarCarrinho} />
        <ProdutoCards produto={paoaustraliano} atualizarCarrinho={atualizarCarrinho} />
        {children}
      </main>
    </>
  );
}
