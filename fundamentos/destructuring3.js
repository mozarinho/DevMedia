function rand({min=0, max=1000}) {  //passando 2 atributos dentro do operador destructuring
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
const obj ={max:50, min:40}
console.log(rand(obj))

//outra possibilidade
console.log(rand({min:955}))

//outra
console.log(rand({}))
//console.log(rand())  ///vai apresentar problema