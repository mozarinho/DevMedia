//Object.preventExtensions Não consegue aumentar o numero de atributos

const produto = Object.preventExtensions({
    nome:'Qualquer', preco:1.99, tag:'promoção'  
}) 

console.log('Extensive: ', Object.isExtensible(produto));

produto.nome= 'Lapis'
produto.descricao = 'Lapis Castel'
delete produto.tag

console.log(produto);

//Object.seal Não consegue add e excluir atributos, mas consegue modificar

const pessoa ={nome:'Juliana', idade : 35}
Object.seal(pessoa)
console.log('Selado:' , Object.isSealed(pessoa));
pessoa.sobrenome= 'Silva' //não conseguiu
pessoa.idade=29 //conseguiu

console.log(pessoa);

//Object.freeze = selado + valores constantes
