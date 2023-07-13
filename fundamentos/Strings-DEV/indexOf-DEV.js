let frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao = frase.indexOf("esperança");
console.log(posicao);



let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

//comentario = comentario.trim();
comentario = comentario.toLowerCase().trim();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); 