var stringExemplo = "Aprendendo JavaScript na DevMedia!";
var resultado = stringExemplo.indexOf("end", 4);

console.log(resultado);

let stringExemplo2 = "Aprendendo JavaScript na DevMedia!";
let posicaoInicial = stringExemplo.indexOf("DevMedia");
let posicaoFinal = posicaoInicial + "DevMedia".length;
let htmlExemplo =""

    
for(caractere in stringExemplo2) {
   htmlExemplo += stringExemplo2.charAt(caractere);

   if(caractere==posicaoInicial -1){
      htmlExemplo+= "<b>"
   }
   if(caractere == posicaoFinal-1){
      htmlExemplo +="<\b>"
   }
}
  
 console.log ('Ao final da execução deste script o valor de htmlExemplo  sera: ' + htmlExemplo)