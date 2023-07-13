exemplo = "Aprendendo JavascripT javascript JAVAScript é na DevMedia ";
resultado = exemplo.replace(/javascript/gi, "JavaScript");
console.log(resultado);

var cpf = "12345678901";
var resultado2 = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
console.log(resultado2);

var stringExemplo = "texto 1 <b> texto 2 </b> texto 3 <b> texto 4 </b>";
stringExemplo = stringExemplo.replace(/<b>/g , "<i>");
var resultado3 = stringExemplo.replace(/<\/b>/g, "</i>");

console.log(resultado3);

var string = "Contrato no valor de R$ 1000. Lucro de R$ 200 para a empresa.";
var resultado4 = string.replace(/\d+/g, function aplicarIndice(x) {
		x = x*1.05;
		return Math.floor(x);}); 

console.log(resultado4);