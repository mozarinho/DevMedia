let comparaComThis = function(param){
    console.log(this===param)
}
comparaComThis(global)

const obj= {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//Funcao Arrow
let comparaComThisArrow = param => console.log(this===param)
//esse this foi definido dentro de um modulo do node
//cada arquivo representa um modulo
comparaComThisArrow(global)
comparaComThisArrow(module.exports)