const [a] = [10] //criou uma variavel 'a' que recebeu o primeiro valor do elemento do array
console.log(a)

const [n1, ,n3, ,n5, n6=0]= [10,7,9,8]
console.log(n1,n3,n5,n6)
const [, [, nota]] =[[,8,8],[9,6,8]]  //pouco usado
console.log(nota)
