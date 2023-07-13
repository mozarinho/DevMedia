require('./global')

console.log(MinhaApp.saudacao())

//pode ate mudr o valor do nome = Um PROBLEMA
MinhaApp.nome= 'Eita'
console.log(MinhaApp.nome);

// uma alternativa de nao poder mudar é usar o Object.freeze

MinhaApp.nome= 'Eita'   //Nao conseguiu mudar
console.log(MinhaApp.nome);