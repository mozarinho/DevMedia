//usando a notação literal
const obj1={}
console.log(obj1)

//Object em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//criar as proprias funções construtoras
function Produto(nome, preco,desc) {
    this.nome = 
    this.preco =preco
    this.getPrecoComDesconto = ()=> preco*(1-desc)
          
    
}
const p1= new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2988.99, 0.25)
console.log("##################");

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory

function criarFuncionario (nome, salarioBase, faltas ){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }

    }
}
const func1 = criarFuncionario('Joao', 7980, 4  )
const func2 = criarFuncionario('Maria', 4980, 1  )
console.log(func1.nome, func1.getSalario(), func2.nome, func2.getSalario())

//Usando Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna objeto
const fromJSON = JSON.parse ('{"info": "Sou Json"}')
console.log(fromJSON.info)