const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) //tabela ASCII UNICODE
console.log(escola.indexOf('r'))  // saber posicao
console.log(escola.substring(1))// a partir do indice 2 para la
console.log(escola.substring(0,3)) // até o indice 2

console.log('Escola'.concat(escola).concat("!").concat(1)) // CONCATENACAO
//OU
console.log('Escola'+escola+"!") // CONCATENACAO

console.log(escola.replace(3,'e'))// No lugar de
console.log(escola.replace(/\d/, 'e')) //REJACTS Substitua todos os Digitos pela letra e
console.log(escola.replace(/\w/g, 'e')) //REJACTS Substitua todas as letras e Digitos pela letra e ( Usou a flag global "g")
console.log('Marcio, Mozart, Ramalho'.split(',')) //converte para array
