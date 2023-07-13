function converteIdade(valor) {
    valor*=365
    return console.log(valor);
}

converteIdade(25)

//OU

function converteIdade2(valor) {
    const diasAno= 365
    return valor*diasAno
}

console.log(converteIdade2(10));
