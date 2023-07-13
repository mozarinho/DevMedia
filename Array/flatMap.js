const escola = [{
    name: 'Turma M1',
    alunos:[{
        name: 'Gustavo',
        nota:8.1
    },{
        name: 'Ana',
        nota: 9.3
    }]
},{
    name: 'Turma M2',
    alunos:[{
        name: 'Rebeca',
        nota:8.9
    },{
        name: 'Roberto',
        nota: 7.3

    }]

}]

const getNotaAluno = aluno=> aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno) 
const nota1 = escola.map(getNotasTurma)
console.log(nota1);

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

//FLATMAP

Array.prototype.flatMap = function (callback) {
   return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);