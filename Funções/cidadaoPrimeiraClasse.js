//FUnção em JS é Firts-Class Object (citizens)

//Forma Literal
function fun1(){

}

//armazenar em variavel
const fun2 = function(){}

//armazenar em um array
 const array = [function (a,b){return a+b}, fun1, fun2] 
 console.log(array[0](2,3))  

 //armazenar em um atributo objeto 
 const obj = {}
 obj.falar = function(){return 'Opa'}
 console.log(obj.falar())  // deve passar os parenteses para executar a função

 //Passar função como parametro
 function run(fun){
     fun()
 }

run(function(){ console.log('Executando...')})

//Uma função pode retornar / conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) //OU
const cincoMais = soma (2,3)
cincoMais(4)

