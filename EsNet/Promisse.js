function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        //usou um seTimeOutr para simular uma situacao real
        setTimeout(() => {
            resolve(frase) // so aceita um unico parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => (frase.concat('?!?')).toUpperCase())
    .then(outraFrase => console.log(outraFrase))
    
      //.catch(e => console.log(e)) // catcha usado para tratar erro
