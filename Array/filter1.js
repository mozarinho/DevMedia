//filter(callback(elemento, indice, array), thisArgu)

const produtos = [
    {nome: 'Notebookk', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 3399, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
]
console.log(produtos.filter(function(p){
    //return false : Significa que vai retornar array vazio, pq irá filtrar e não retornará nenhum
    return p.preco>2500 
        
}))

const caro = produtos=>produtos.preco>=2000
const fragilidade = produtos=>produtos.fragil=true

const resultado = produtos.filter(caro).filter(fragilidade)
console.log(resultado)