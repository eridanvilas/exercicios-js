function criarProduto(nome, preco){
   let desconto = preco - (preco * 0.01)
  return {
    nome: nome,
    preco: preco,
    desconto: desconto,
  }
}

console.log(criarProduto('refrigerante', 8))