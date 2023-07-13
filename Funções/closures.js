//conceito: É o Escopo criado quando uma função é declarada
//Permite a função acessar e manipulaar variáveis externas à função

//Contexto lexico em acao!

const x = 'Global'
function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())