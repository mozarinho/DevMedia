const pai ={
    nome:'Pedro',
    corCabelo:'preto'
}

const filha1 = Object.create(pai)
filha1.nome="Ana"
console.log(filha1.corCabelo)

const filho2 = Object.create(pai, {
    nome:{ value:'Bla', writable: true, enumerable: true}
})

console.log(filho2.nome)
filho2.nome = 'Carla'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filho2))

for(let key in filho2){
   filha1.hasOwnProperty(key)?  // Para saber se um determinado atributo pertence  ao proprio objeto
   console.log(key) : console.log(`Por herança: ${key}`)
}
console.log(filho2.nome);