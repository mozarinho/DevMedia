const fs = require('fs') // Leitura do filesystem, modulo core do Node

const caminho = __dirname + '/arquivo.json' //aponta pro diretorio onde o arquivo .js que vc ta executando se encontra

//sincrono... // se for uma arquivo pequeno não causa impacto, mas se for grande não é aconselhado
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//assincrono...

fs.readFile(caminho, 'utf-8',(erro, conteudo)=>{ // chama a callback, quando tiver lido o arquivo fara o tratamento em cima do conteudo. COmo o erro ta vazio, irá ler automaticamnente o conteudo
  const config =JSON.parse(conteudo)
  console.log(config);
  console.log(`${config.db.host}:${config.db.port}`);
} )


//Outra maneira através do formata JSON

const config = require ('./arquivo.json')
console.log("##########");
console.log(config.db); // ja rouxe o arquivo convertido em objeto

//Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteudo da pasta:');
    console.log(arquivos);
})
