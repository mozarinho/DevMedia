 console.log(typeof String );
 console.log(typeof Array);
 console.log(typeof Object);

 String.prototype.reverse = function () {
     return this.split('').reverse().join('') // O array possui a função reverse 
 }

 console.log('Marcio Mozart'. reverse());

 Array.prototype.first = function(){
     return this[0]
 }

 console.log([1,2,3,4,5].first());

 //Sobrescrever uma função ja existente (toString) 
 //Atenção: Evitar fazer isso

 String.prototype.toString = function(){
     return 'Lascou!!'
 }

 console.log('Exemplo'.reverse())