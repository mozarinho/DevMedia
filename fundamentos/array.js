const valores = [7.7, 8.9, 6.0, 5.5]
console.log(valores[0])
console.log(valores[4]) //undefined
valores [4] =10
console.log(valores)
console.log(valores.length)
valores.push({id:3}, false, null, 'teste') //{id:3} objeto
console.log(valores)
console.log(valores.pop()) // retira o ultimo valor
delete valores[0]
console.log(valores)
console.log( typeof valores)