const sequencia = {
    _valor: 1,  //convenção, "_" mostra que essa variavel so vai ser acessada internamente

    get valor() {
        return this._valor++
    },
    set valor(valor1) {
        if(valor1>this._valor){
        this._valor = valor1
    }
    }

}

console.log(sequencia.valor, sequencia.valor) //implicitamente está chamando o metodo get valor()
sequencia.valor=1000
console.log(sequencia.valor, sequencia.valor) //implicitamente está chamando o metodo get valor()
sequencia.valor=900
console.log(sequencia.valor, sequencia.valor) //ignorou, pois está levando um valor menor(900) do que já tem

//JS nao suporta a sobrecarga