conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv";
resultado = conteudoCSV.split(/\s*;\s*/);

console.log(resultado);

stringExemplo = " Os 8000 números 345 precisam ser 1 removidos";
resultado2 = stringExemplo.split(/\d+/);
console.log((resultado2));

let frase = "Marcio Mozart Ramalho de Mendonca"
res = frase.split(" ").reverse()
console.log(res);