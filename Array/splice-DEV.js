const diasDaSemana = [
    "domingo", "segunda-feira", "terça-feira",
    "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
];

diasDaSemana.splice(2,1);
console.log(diasDaSemana);

diasDaSemana.splice(1,3);
console.log(diasDaSemana);9

//SPLICE REMOVE ELEMENTOS
diasDaSemana.shift()// remove o ultimo
console.log(diasDaSemana);
diasDaSemana.pop()// remove o primeiro
console.log(diasDaSemana);