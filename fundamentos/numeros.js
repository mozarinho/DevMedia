const peso1 = 1.0
const peso2 = Number('2.0') 
const peso3 = Number('2.1')
console.log(typeof peso2)

console.log(Number.isInteger(peso1))

console.log(peso1, peso2)

console.log(Number.isInteger(peso3))

console.log('*****************')
const num1 = 9.871
const num2 = 9.871

const total =  num1*peso1 + num2*peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))
console.log(media)
console.log(media.toString(2)) ///Gera um numero binário
console.log(typeof media)
console.log(typeof Number)