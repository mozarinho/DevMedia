const alunos = [
    {nome:'Joao', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.3, bolsista: true},
    {nome:'Pedro', nota: 8.3, bolsista: false},
    {nome:'Ana', nota: 6.3, bolsista: true},

]

//Desafio 1: Todos os alunos sao bolsistas?

const todosOsBolsistas= (resultado,bolsista)=> resultado&&bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosOsBolsistas))
//Desafio 2 : Algum aluno é bolsista?
const algumBolsista = (resultado,bolsista)=>resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))
