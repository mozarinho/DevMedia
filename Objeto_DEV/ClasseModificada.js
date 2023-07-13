class Pessoa {
    constructor (nome, cpf) {
      this.nome = nome
      this.cpf = cpf
    }
  
    getNome () {
      return this.nome
    }
  
    getCpf () {
      return this.cpf
    }
  }
  
  const p1 = new Pessoa('Bruno')
  
  console.log(p1.getNome())