Array.prototype.filter2 = function(callBack){
    const newArray = []
    for(let i =0; i<this.length;i++){
        if(callBack(this[i], i, this )){
           newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebookk', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 3399, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
]

const caro = produtos=>produtos.preco>=2000
const fragilidade = produtos=>produtos.fragil=true

console.log(produtos.filter2(caro).filter2(fragilidade))