const pessoa = {nome:'Joao'}  // pessoa aponta para o endereco de memoria EX:123... Ai nesse endereco é de fato onde o objeto esta criado

pessoa.nome = 'Pedro' // o que mudou foi objeto e nao o emdereco de memoria
console.log(pessoa)

//pessoa = {nome:'Ana'}  // vai dar ERRO

Object.freeze(pessoa)  //congela o objeto, nao consegue add, remove, inserir nada no objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome)  //vai coninuar sendo Pedro
pessoa.end = 'Rua ABC'  //nao inclui

//Ter um objeto constante
let pessoaConstante = Object.freeze({nome:'JoaoMarcos'}) 
console.log(pessoaConstante)

pessoaConstante.nome = "Marcos"
console.log(pessoaConstante);