var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
 ];

 var podioPais = vencedores.map(function (item, indice ) {
     return indice + " "+ item.pais
 });


console.log(podioPais);