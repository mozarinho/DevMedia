// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.keys(obj));
console.log(Object.entries(obj))  //matriz

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {

    nome,
    // OU nome:nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
//ATENÇÂO TEM Q CHAMAR ASSIM A CLASSSE, POIS NO FINAL ELA É UMA FUNÇÂO
const resul = new Cachorro();
console.log(resul.falar()); 
//OU console.log(new Cachorro().falar())
