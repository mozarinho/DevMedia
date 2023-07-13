function Pessoa (nome, cpf) {
    this.nome = nome
    this.cpf = cpf
  }
  
  Pessoa.prototype.getNome = function () {
    return this.nome
  }
  
  Pessoa.prototype.getCpf = function () {
    return this.cpf
  }
  
  const p1 = new Pessoa('Bruno')
  
  console.log(p1.getNome())