var obj = require('./produtos_ex19.json');

function venda(codigo, quantidade) {
    let produto = obj.Produtos.find(x => x.Codigo == codigo);
    if (produto != undefined && produto != null)
        return "Lista de produtos \n" + "- " + produto.Descrição + '    QTD: ' + quantidade +"\n"+"Valor Total R$: " + produto.Preço * quantidade;
    else
        return "Produto não Encontrado";
}
console.log(venda(100, 2));
console.log(venda(25,1));
console.log(venda(400,2));