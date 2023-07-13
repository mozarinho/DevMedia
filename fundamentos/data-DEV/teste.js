const hoje = new Date()
;

const ano= hoje.getFullYear()
;

if ( ano % 4 == 0 ) {
  console.log( 'Ano bissexto' );
} else {
  console.log( 'Não é ano bissexto' );
}