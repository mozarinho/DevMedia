//armazenamento uma função em uma variavel
const imprimirSOma = function imrpimirSoma(a,b){
 console.log(a+b)
}

imprimirSOma(2,3)

//armazenamento uma função ARROW em uma variavel

const soma = (a,b)=>{
return a+b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b)=> a-b
console.log(subtracao(2,3))

const imrpimir2 = a =>console.log(a) //como o parametro so é 1 (a), não precisa dos parenteses
imrpimir2('Legal')