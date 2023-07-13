//factory retorna um objeto

const prod1={
    nome: 'TV',
    preco: 45

}
const prod2={
    nome: 'Celular',
    preco: 49

}

//Para evitar a repetição

function criaPessoa() {
    return {
        nome:'Maria',
        sobrenome: 'Mozart'
    }
}

console.log(criaPessoa())
