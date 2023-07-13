
// Forma trabalhosa

let frase = "Marcio Mozart Ramalho de Mendonça"
let palavra =""
 let posicaoInicio= 7
 let posicaoFinal = 12

 for(let i = 0; i<= frase.length; i++){
     if(i>=posicaoInicio && i<= posicaoFinal){
         palavra += frase.charAt(i)
     }
 }

 console.log(palavra);

 //Forma com toString
 let frase2 = "Roberta Campos Sales"
 posicaoInicio= 8
  posicaoFinal = 14
 let palavra2 = frase2.substring(posicaoInicio, posicaoFinal)
 console.log(palavra2);