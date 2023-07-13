const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar() 
const falou = pessoa.falar
falou() // gerou um problema: undefined, conflito enre prorgmação funcional e OO
console.log('****************')
/*********** */ 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
console.log('****************')
const falou2 = pessoa.falar
falou2()

