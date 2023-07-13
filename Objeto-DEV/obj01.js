function Carro(){
    var Marca = "sem marca"
    var Modelo = "sem modelo"
    this.SetMarca = SetMarca();
    this.SetModelo = SetModelo
    this.ShowMarca = DisplayMarca()
    this.showModelo = DisplayModelo()

    function DisplayMarca(){
        return this.Marca

    }

    function DisplayModelo(){
        return Modelo
    }

    function SetMarca(_marca){
        Marca=_marca
    }

    function SetModelo(_modelo) {
        Modelo = _modelo;
    }
    
    
}

var carro = new Carro()
console.log(carro.Marca);