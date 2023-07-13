let texto = "A linguagem PHP é muito poderosa, PHE é foda!!";
let resultado = texto.replace("PHP", "JavaScript");

console.log(resultado);

let textos = "O Rio de Janeiro é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive no Rio de Janeiro é muito privilegiado!";

let resultados = textos.replace(/Rio de Janeiro/g, "RJ");

console.log(resultados);