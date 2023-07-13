const { loadavg } = require("os")

class Pessoa {
    constructor () {
        this.data = {}
    }

    cpfIsValid (value) {
        return /^\d\.\d\.\d\-\d$/.test(value)
    }

    get cpf () {
        // verifica se a propriedade não existe no atributo this.data da classe
        if (!this.data.hasOwnProperty('cpf')) {
        return undefined
        }
        // retorna o valor da cpf
        return this.data.cpf
    }

    set cpf (value) {
        if (!this.cpfIsValid(value)) {
        console.log('numero de cpf invalido')
        }else{

        this.data[ 'cpf' ] = value
        }
    }
}

const pessoa = new Pessoa()

pessoa.cpf='052.717.444-00'  

console.log(pessoa.cpf)
