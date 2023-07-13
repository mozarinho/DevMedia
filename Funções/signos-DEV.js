let colecao_signos = [
    { "Nome": "Aquário", "DataInicio": "01-20", "DataFim": "02-18" },
    { "Nome": "Peixes", "DataInicio": "02-19", "DataFim": "03-20" },
    { "Nome": "Áries", "DataInicio": "03-21", "DataFim": "04-19" },
    { "Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20" },
    { "Nome": "Gêmeos", "DataInicio": "05-21", "DataFim": "06-21" },
    { "Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23" },
    { "Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22" },
    { "Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22" },
    { "Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22" },
    { "Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21" },
    { "Nome": "Sagitário", "DataInicio": "11-22", "DataFim": "12-21" },
    { "Nome": "Capricórnio", "DataInicio": "12-22", "DataFim": "01-19" }
];

const verifica_data_range= (data, data_inicio, data_final)=>{
    let tipo_comparacao = signo["DataInicio"]== "12-22"?"or":"and";
    if ( tipo_comparacao == "and"){
     if (data >= data_inicio && data <= data_final){
         return true
     }
 }else if(tipo_comparacao =="or"){   
     return data >= data_inicio || data <= data_final
         
     }
 }
    


const retorna_signo = (signos, data) => {
    

    let ano = data.getFullYear()
    for (signo of signos) {
        let data_inicio = new Date(ano + "-" + signo["DataInicio"]);
        let data_final = new Date(ano + "-" + signo["DataFim"]);

      if(verifica_data_range(data, data_inicio, data_final)){
          return signo["Nome"]

      }

}
}
let data_exemplo = new Date("2020-01-05")
const nome_signo = retorna_signo(colecao_signos, data_exemplo)
console.log("O signo do dia é " + nome_signo);
