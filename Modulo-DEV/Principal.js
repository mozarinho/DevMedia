import colecao_signos from './dados/dados.js';
import retorna_signo from './funcoes/funcoes.js';


let data_exemplo = new Date("2020-02-28" );
const nome_signo = retorna_signo(colecao_signos, data_exemplo)
console.log("O signo do dia é " + nome_signo);


// se fosse usando o require
/*
const dados = require('./dados/dados.js')
const funcao = require('./dados/funcoes.js')

let data_exemplo = new Date("2020-01-05")
const nome_signo = funcao.retorna_signo(dados.colecao_signos, data_exemplo)
console.log("O signo do dia é " + nome_signo);
*/