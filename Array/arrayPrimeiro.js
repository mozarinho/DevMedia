console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Mozar', 'Marcio', 'Beta')  //forma nao tao recomendada
console.log(aprovados)


aprovados = ['Mozar', 'Marcio', 'Beta']
console.log(aprovados[0])

//inserir
aprovados[3] = 'Paulo'
aprovados.push('Sakes')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
delete aprovados[0]
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados.splice(1,2) // exclui a partir do indice 1, 2 elementos
console.log(aprovados)

aprovados.splice(1,2, 'PAULO', 'RAFAEL')
console.log(aprovados)


