var marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen", "Renault"]
var marcasIniciadasComF = [];
var novoIndice = 0;

function selecionar(item, indice) {
    if(marcas[indice].indexOf("F")==0){
        marcasIniciadasComF[novoIndice]= marcas[indice]
        novoIndice++
        
    }
    
}

marcas.forEach(selecionar)
console.log(marcasIniciadasComF);
console.log(marcas[0].length);