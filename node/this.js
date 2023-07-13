console.log(this===global);  //Pois this aponta para module.exports
console.log(this===module);
console.log(this===module.exports);
console.log(this=== exports);

//Dentro da função o THIS apontara para o global
function logThis() {
    console.log('Dentro de uma funcao...');
    console.log(this===exports); //dentro de uma função ela nao aponta para o exports
    console.log(this===global);
}
logThis()