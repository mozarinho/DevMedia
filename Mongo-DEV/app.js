var MongoClient = require('mongodb').MongoClient;
var servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, {useUnifiedTopology:true},function (erro, db) {
   
    if(erro){
        console.log("Erro ao estabelecer conexao: " +erro);
    }else
    console.log("Conexao estabelecida com sucesso");

db.close;
})