  import ProdutoCard from './interfacedosprodutos';
  function ProdutoCards({ }: ProdutoCard, nome: string, id: string, descricao: string, preco: number, quantidade: number) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <h2>{nome}</h2> 
      <p>{descricao}</p>
      <p>R$ {preco}</p>
      <button id={id}> 
        Adicionar
      </button>
    </div>
  );
}

export default ProdutoCards;