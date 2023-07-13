const aprovados =  ['Mozart', 'Beta', 'Ramalho', 'Sales']
//aprovados.forEach(callBack(proprio Elemento(NOME), INDICE do elemento q esta sendo executado))
// além desses 2 parametros, existe o 3° parametro (ARRAY)
aprovados.forEach(function name(nome,indice) {
    console.log(`${indice+ 1}) ${nome}`)
})

//OU
aprovados.forEach(nome=>console.log(nome))

//OU
const exibirApovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirApovados)
console.log("************")

// além desses 2 parametros, existe o 3° parametro (ARRAY)
aprovados.forEach(function name(nome,indice, array) {
console.log(array)
})