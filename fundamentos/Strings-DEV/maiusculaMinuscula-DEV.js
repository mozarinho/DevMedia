let programador_1 = "Flávia";
let programador_2 = "Rogério";

console.log(programador_1.toUpperCase()); // FLÁVIA

console.log(programador_2.toLowerCase()); // rogério

let email_acesso="mozarinho@gmail.com"
let email_cadastro = "MOZARINHO@gmail.com"

if(email_acesso.toLowerCase() == email_cadastro.toLocaleLowerCase()){
    console.log("Foi enviado um link de ativação para seu email");
}else{
    console.log("Esse email não existe em nossas bases de dados");
}

let telefone_1 = "(99) 99999-9999";
let telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1 == telefone_2 ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}