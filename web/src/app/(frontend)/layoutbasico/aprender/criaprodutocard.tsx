 'use client';
 import type ProdutoCard from './interfacedosprodutos';
 import { useState } from 'react';
 
 interface Props {
   atualizarCarrinho: (preco: number, adicionar: boolean) => void;
   produto: ProdutoCard;
 }
 
  function ProdutoCards({ produto, atualizarCarrinho }: Props) {
    const [contador, setContador] = useState(0);
  function Contador() {
    if (contador === 0) {
      atualizarCarrinho(produto.preco, true);
      setContador(1);
    } else {
      atualizarCarrinho(produto.preco, false);
      setContador(0);
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px', width: '250px' }}>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>R$ {produto.preco}</p>
      <button onClick={Contador}>
        {contador === 0 ? 'Adicionar' : 'Remover'}
      </button>
      
    </div>
  );
}

export default ProdutoCards;