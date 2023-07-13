function getPreco(imposto=0, moeda= 'R$') {
    return `${moeda} ${this.preco *(1-this.desc)*(1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //cria uma atributo getPreco e vai associar a função acima(getPreco)
}

console.log (getPreco()) //Nan

global.preco= 20
global.desc= 0.1
console.log (getPreco())
//1 forma
console.log (produto.getPreco())

//2 forma - CALL
const carro ={
    preco:49990,
    desc: 0.20
}

console.log(getPreco.call(carro))

//3 forma Apply -Passa os parametros através de um Array
console.log(getPreco.apply(carro))

//Diferença entre o Call e Apply é a passagem dos parametros 
console.log("\n")
console.log(getPreco.call(carro, 0.17, '$')  )
console.log("\n")
console.log(getPreco.apply(carro, [0.17, '$']))
