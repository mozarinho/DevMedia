const fabricantes = ['Gol', 'Uno', 'Celta']

function imprimir(nome, indice) {
    console.log(`${indice+1}, ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function (a) {
  console.log(a)  
})
//função arrow
fabricantes.forEach(a=>console.log(a))
