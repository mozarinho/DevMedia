//criar um metodo forEach
Array.prototype.forEach2 = function (callBack) {
    for(let i=0; i<this.length; i++){
        callBack(this[i], i, this)
    }
}

const aprovados =  ['Mozart', 'Beta', 'Ramalho', 'Sales']
aprovados.forEach2(function name(nome,indice) {
    console.log(`${indice+ 1}) ${nome}`)
})