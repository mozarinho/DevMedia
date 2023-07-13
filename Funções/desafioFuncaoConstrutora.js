class Pessoa {
    constructor(nome) {
        this.nome = nome

    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

//SUBSTITUINDO para funcao construtora

function Pessoa3(nome) {

    this.nome = nome //opcional

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa3(`Zé`)
p1.falar()