//1 forma
function retornar (valor) {
    return "Olá, " + valor+ "!"
}

console.log(retornar('Marcio')); 

//2 forma
retornarArrow =(valor)=>`Ola,  ${valor}`

console.log(retornarArrow('Mozart'));

//3 forma
function retornarConcat(valor) {
    const saudacao = 'Ola'
    return [saudacao, valor].join(', ').concat('!')
    
}

console.log(retornarConcat('Ramalho'));