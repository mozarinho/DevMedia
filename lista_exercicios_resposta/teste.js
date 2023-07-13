function plano(idade) {
    let TaxaBasica = 100
    let mensalidade = 0
    if (idade > 60) {

        mensalidade = TaxaBasica + 130
    } else if (idade <= 60 && idade >= 30) {
        mensalidade = TaxaBasica + 95
    } else if (idade >= 10 && idade < 30) {
        mensalidade = TaxaBasica + 50

    } else {
        mensalidade = TaxaBasica + 80

    }
    return mensalidade
}

console.log(plano(1))