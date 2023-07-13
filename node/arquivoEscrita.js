const fs = require('fs')

const produto={
    nome:'Celular',
    preco:1240.99,
    desconto:0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro=>{
    console.log(erro || 'Arquivo salvo');
})
