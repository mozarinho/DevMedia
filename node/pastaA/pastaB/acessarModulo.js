const moduloA = require ('../../moduloA')  //tanto faz colocar moduloA ou moduloa. exceto no sistema Linux

//OU

console.log(moduloA.ola);

const saudacao = require('saudacao')
console.log(saudacao.ola);

const http = require ('http')
http.createServer((req, res)=>{
    res.write('Bom dia')
    res.end()
}).listen(8080)
