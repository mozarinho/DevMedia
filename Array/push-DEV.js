const diasDaSemana = [
    "domingo", "segunda-feira", "terça-feira",
    "quarta-feira", "quinta-feira", "sexta-feira"
];

//push insere no ultimo elemento
diasDaSemana.push("sabado")
console.log(diasDaSemana);

//unshift insere no 1 elemento

diasDaSemana.unshift("Outro")
console.log(diasDaSemana);

const diasDaSemana2 = [
    "domingo", "segunda-feira", "terça-feira",
    "quarta-feira", "quinta-feira", "sexta-feira"
];

const removeTodos = diasDaSemana2.length
console.log(diasDaSemana2);
console.log(diasDaSemana2.splice(0,removeTodos));
console.log(diasDaSemana2 + " Foram removidos");