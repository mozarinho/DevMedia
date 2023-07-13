function criarProduto(nome,preco) {
    return{
        nome:nome,
        preco,
         desconto:0.1
    }
}
console.log(criarProduto('Notebook', 2111.49))
console.log(criarProduto('Ipad', 999.99))d