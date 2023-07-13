const nota =[7.7,6.5, 5.2, 8.9, 7.1, 9.0]
//Sem usar callBack

const notasBaixas = []
for(let i in nota){
    if(nota[i]<7){
        notasBaixas.push(nota[i])
    }
}

console.log(notasBaixas)

//com callBack
const notasBaixas2 = nota.filter(function (nota) {
    return nota<7
    
})

console.log(notasBaixas2)

//arrow
const notasBaixas3 = nota.filter(nota=>nota<7)

console.log(notasBaixas3)

//Outra forma
const notasMnorque7 = nota=>nota<7
const notasBaixas4 = nota.filter(notasMnorque7)
console.log(notasBaixas4)