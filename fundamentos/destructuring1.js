const pessoa={
    nome:'Ana',
    idade:35,
    endereco:{
        logradouro: 'Rua Abc',
        numero:10
    }
}

const {nome, idade}= pessoa
console.log(nome, idade)

const {nome:n, idade: i}= pessoa
console.log(n,i)

const {sobrenome, bemHUmorada=true}= pessoa
console.log(sobrenome, bemHUmorada)

const {endereco:{logradouro, numero, cep}}= pessoa