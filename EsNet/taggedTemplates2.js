function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
        //ou  resultado.push(partes[indice] = valor)
         
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)

function real2(partes2, ...valores2){
    const resultado2 =[]
    valores2.forEach(function(valor, indice){
        valor = isNaN(valor)? valor: `R${valor.toFixed(2)}`
        resultado2.push(partes2[indice], valor)
    })
return resultado2.join("")
}

const preco2 = 50.0
const precoParcela2 = 11
console.log(real2 `1x de ${preco2} ou 3x de ${precoParcela2}.`)

