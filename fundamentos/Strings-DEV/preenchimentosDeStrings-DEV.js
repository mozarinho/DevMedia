let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, "*") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

let label = "Email: ";
let email = "contato@email.com";

console.log( label.padEnd(20, ' ') + email );
