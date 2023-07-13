class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor

    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentosArray = []
    }

    addLancamento(...lancamentos) {  //recebe um ou mais lançamentos  PARAMETROS VARIAVEIS
        lancamentos.forEach( l=> this.lancamentosArray.push(l))
    }

    sumario(){
         let valorConsolidado =0
         this.lancamentosArray.forEach(l=>{
               valorConsolidado+=l.valor   
         })
         return valorConsolidado
    }
    
} 

const salario = new Lancamento('Salario', 50000 )
const contaLuz = new Lancamento ('Luz', -220)

const contas = new cicloFinanceiro(6, 2020)
contas.addLancamento(salario, contaLuz)
console.log(contas.sumario())