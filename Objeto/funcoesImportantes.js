const pessoa = {
    nome: 'Marcio',
    idade: 35,
    peso:92
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//OU
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}:: ${valor}`)
})

const aluno =Object.defineProperty(pessoa, 'datadenascimento',{
    enumerable:true,
    Writable: false,
    value: '02/03/2020'
})
pessoa.datadenascimento = '10/02/2021'
console.log(pessoa.datadenascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScrip 2015)
const dest = {a:1}
const o1 ={b:2}
const o2 ={c:3, a:4}
const obj = Object.assign(dest, o1,o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

console.log(Object.keys(aluno))