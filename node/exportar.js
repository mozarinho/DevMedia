console.log(module.exports);
console.log(exports);
console.log(module.exports===this);

console.log(module.exports===exports);

this.a = 1
exports.b =2
module.exports.c = 3

exports = null
console.log(module.exports);

exports = {
    nome:'Teste '
}

console.log(module.exports);
//Usando o module.exports há uma mudança
module.exports = {
    publico: true
}

console.log(module.exports);