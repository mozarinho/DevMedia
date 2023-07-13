
const operacoes = ['soma', 'subtracao', 'multiplicacao', 'divisao']

function montaTextoDaLista() {
    let textoDaLista = ''

    for (let i = 0; i < operacoes.length; i++) {
        textoDaLista += '<li>' + operacoes[i] + '</li>'

    }


    return textoDaLista


}

document.querySelector("#ListaOperacoes").innerHTML = montaTextoDaLista()