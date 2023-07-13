console.log(soma(2,3)) //pode chama a funcao antes de declara-la
console.log(sub(4,3)) // vai dar problema
console.log(mult(4,3)) // vai dar problema
//function declaration
function soma(x,y) {
    return x+y
}
 
//function expression
const sub = function(x,y){
    return x-y
}

//named function expression MENOS COMUM
const mult = function multi(x,y) {
    return x*y
}