const instanciaNova = require('./instanciaNova')
const contadorA= require('./instanciaUnica')

const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // () retorna um objeto 

const contadorD = require('./instanciaNova')()
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor)
console.log(typeof contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor);
console.log(typeof contadorD.valor)
