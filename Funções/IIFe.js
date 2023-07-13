//funcao autoinvocada
//Serve no caso do browser, fugir do escopo global
//IIFE -> Immediately Invoked Function Expression

(function(){
    console.log('Sera executado na hora')
    console.log('Foge do escopo mais abrangente') 
})()