function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 > altura2 && taxa1 >= taxa2) {
        return 'A criança menor não ultrapassará a maior.'
    } else if (altura1 > altura2 && taxa1 < taxa2) {
        return (`A crianca menor ultrapassara a altura da maior em ${calcularTempo(altura1, taxa2, altura2, taxa1)} anos`)
    } else if (altura2 > altura1 && taxa2 >= taxa1) {
        return 'A criança menor não ultrapassará a maior.'
    } else if (altura2 > altura1 && taxa2 < taxa1) {
        return (`A crianca menor ultrapassara a altura da maior em ${calcularTempo(altura2, taxa1, altura1, taxa2)} anos`)

    
    } else if (altura1 == altura2 && taxa1 >= taxa2) {
        return 'A criança1  ultrapassará a crianca2 em 1 ano'
    } else {
        return 'A criança2  ultrapassará a crianca1 em 1 ano'
    }
}

function calcularTempo(alturaMaior, taxaAlturaMaior, alturaMenor, taxaAlturaMenor) {
    let qtdAno = 0
    while (alturaMenor < alturaMaior) {
        alturaMaior += taxaAlturaMenor
        alturaMenor += taxaAlturaMaior
        qtdAno++
    }
   
    return qtdAno
}

console.log(calcularCrescimento(176, 2, 180, 1));
//console.log(calcularCrescimento(150, 2, 130, 4));