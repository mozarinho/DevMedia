
var express = require('express')
var app = express() //criando uma instancia
app.use (express.static("public"))// vai fazer carregamento estatico dentro da pasta public
var path = require("path")  //fornece a dirname

 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/page/index.html")
 })

 app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/public/page/sobre.html")
 })

 app.get('/contato', function(req, res){
    res.sendFile(__dirname + "/public/page/contato.html")
 })
app.listen("8060", function () {
    console.log("Executando!!")

})
