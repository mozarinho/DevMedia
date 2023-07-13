const dataUltimoAcesso = new Date('2020/12/13 16:00:00');
const dataAtual = new Date();

const dataAtualMilissegundos = dataAtual.getTime();

const dataUltimoAcessoMilissegundos = dataUltimoAcesso.getTime()
const diferencaMiliseg = dataAtualMilissegundos - dataUltimoAcessoMilissegundos
const milissegHora = 1000 * 60 * 60
const milissegDia = milissegHora * 24

const hora = dataAtual.getHours()
let mensagem = " "
if (hora < 6 || hora >= 18) {
    mensagem = "Bom dia"
} else if (hora >= 6 && hora < 12) {
    mensagem = "Boa tarde"
} else {
    mensagem = "Boa tarde"
}

if (diferencaMiliseg > milissegDia) {
    mensagem += " Voce esta ausente há dias"
} else if (diferencaMiliseg > milissegHora) {
    mensagem += " Voce esta ausente a horas"
} else {
    mensagem += " Que bom que você ainda esta aqui"
}

console.log(mensagem);


