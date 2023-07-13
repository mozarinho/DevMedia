function Carro(velocMax=200, delta=5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico - Quando coloca o This, fica publico, se for para ser privado
    //so era colocar const acelerar ou let acelerar
    this.acelerar = function(){
        if(velocidadeAtual +delta <= velocMax){
            velocidadeAtual+= delta
        }else{
            velocidadeAtual = velocMax 
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){  
        return velocidadeAtual
    }
}

const uno = new Carro  //Opcional Carro()
uno.acelerar() 
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
