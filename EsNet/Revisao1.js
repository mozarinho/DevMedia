// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b); nao ira funcionar por conta do let

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Mozart"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)