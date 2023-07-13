//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'  //não faça isso!!!
const avo = { attr1: 'a' }
const pai = { __proto__: avo, attr2: 'b', attr3: '3' }
const filho = { __proto__: pai, attr3: 'c' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//Função importante que estabelece a relação de prototipos entre 2 objetos

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(volvo.velMax);

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

console.log(filho.__proto__)


