const { type } = require("os");

const numeros = [ 1,2,3,4,5];

for (numero in numeros){

  if ( numero % 2 == 0 ) {
    console.log( numero * numero);
  } //else {
   // console.log(++numero); // soma 1
  //  console.log(typeof numero)
  
  else{
      console.log(numero +1);  //concatena numero + 1
      console.log(typeof numero);
  }
}