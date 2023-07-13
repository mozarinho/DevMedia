//A classe em JS é uma funcao escrita de forma diferente
class Pessoa {
    constructor(nome) {
        this.nome = nome

    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa(`Joao`)
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)  // como usou uma funcao arrow, não precisa usar o this
    }
}

const p2= criarPessoa('Marcio')
p2.falar()