const verifica_data_range = (data, data_inicio, data_final, tipo_comparacao) => {
    
    if (tipo_comparacao == "and") {
        if (data >= data_inicio && data <= data_final) {
            return true
        }
    } else if (tipo_comparacao == "or") {
        return data >= data_inicio || data <= data_final

    }
}



const retorna_signo = (signos, data) => {


    let ano = data.getFullYear()
    for (const signo of signos) {                                             
        let data_inicio = new Date(ano + "-" + signo["DataInicio"]  );
        let data_final = new Date(ano + "-" + signo["DataFim"]);

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range(data, data_inicio, data_final, tipo_comparacao)) {
            return signo["Nome"]

        }

    }
}

export default retorna_signo;
/*
module.exports={
    retorna_signo
}
*/