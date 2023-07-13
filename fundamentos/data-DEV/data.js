// Sem parâmetro: Data atual
const hoje= new Date();
console.log(hoje);
hoje.getmi

// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo uma string com a data armazenada
console.log( hoje.toString() );

// Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString() );

// Imprimindo timestamp - quanto tempo se passou
console.log( hoje.valueOf() );
console.log("*************");
// Com parâmetro: String com a data
const exemplo1 = new Date(  "2020-02-28"  );
const exemplo2 = new Date(  "2020-02-27 10:35:00"  );

//  Com parâmetro: Um número para ano, mês, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(  2020, 2, 28, 13, 20, 2, 15  );

console.log(exemplo1);
console.log(exemplo2);
console.log(exemplo3);
