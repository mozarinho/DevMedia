//substr (6,10)  começa no indice 6 e percorre 10 casas
let frase = "Estou aprendendo JavaScript na DevMedia";

let resultado = frase.substr(6, 10);

console.log(resultado);

//substring (6,10) = começa no indice 6 e vai ate o indice 10
let frase2 = "Estou aprendendo JavaScript na DevMedia";

let resultado2 = frase2.substring(6, 10);

console.log(resultado2);

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substr(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo);