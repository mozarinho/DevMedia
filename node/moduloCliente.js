//PAdrão, toda vez que a classe terminar com Cliente, segnifica que irá usar outros módulos

const moduloA = require('./moduloA')

const moduloB = require('./moduloB')

console.log(moduloA.ola)

console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);
console.log(moduloB);