// Serve transformar o array em um unico elemneto, em string,...
const alunos = [
    {nome:'Joao', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.3, bolsista: true},
    {nome:'Pedro', nota: 8.3, bolsista: false},
    {nome:'Ana', nota: 6.3, bolsista: true},

]
console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador.toFixed(2),atual)
    return acumulador+atual
})
console.log("*****'")
console.log(resultado.toFixed(2))

//passano um valor incial
const resultado2 = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador.toFixed(2),atual)
    return acumulador+atual
}, 10)

console.log(resultado.toFixed(2))