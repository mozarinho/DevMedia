
function saque(valorSacado) {
    let contador200 = 0
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    valorNota = calcularValorNota(valorSacado)
    while (valorSacado >= valorNota) {
        switch (valorNota) {
            case 200:
                valorSacado -= 200
                contador200++
                break
            case 100:
                valorSacado -= 100
                contador100++
                break
            case 50:
                valorSacado -= 50
                contador50++
                break
            case 20:
                valorSacado -= 20
                contador20++
                break
            case 10:
                valorSacado -= 10
                contador10++
                break
            case 5:
                valorSacado -= 5
                contador5++
                break
            case 1:
                valorSacado -= 1
                contador1++
                break
        }
        valorNota = calcularValorNota(valorSacado)
    }
    return resultado(contador200,contador100,contador50,contador20,contador10,contador5, contador1)

}


    function calcularValorNota(valorSacado) {
        if (valorSacado >= 200) {
            return 200
        } else if (valorSacado >= 100) {
            return 100
        } else if (valorSacado >= 50) {
            return 50
        } else if (valorSacado >= 20) {
            return 20
        } else if (valorSacado >= 10) {
            return 10
        } else if (valorSacado >= 5) {
            return 5
        } else if (valorSacado >= 1) {
            return 1
        }
    }


    function resultado(contador200, contador100, contador50, contador20, contador10, contador5, contador1) {
        let resultado = ""
        if (contador200 > 0) {
            resultado += ` ${contador200} nota(s) de R$ 200 \n `
        }
        if (contador100 > 0) {
            resultado += `${contador100} nota(s) de R$ 100 \n`
        }

        if (contador50 > 0) {
            resultado += `${contador50} nota(s) de R$ 50 \n `
        }
        if (contador20 > 0) {
            resultado += `${contador20} nota(s) de R$ 20 \n `
        }

        if (contador10 > 0) {
            resultado += `${contador10} nota(s) de R$ 10 \n`
        }
        if (contador5 > 0) {
            resultado += `${contador5} nota(s) de R$ 5 \n`
        }
        if (contador1 > 0) {
            resultado += `${contador1} nota(s) de R$ 1 \n`
        }
        return resultado

    }

    console.log(saque(189))