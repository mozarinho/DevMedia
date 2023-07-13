let dobro = function(a){
    return 2*a
}

//MESMA COISA
dobro =(a)=>{
    return 2*a
}

//oBS Toda função arrow é uma função anonima

//FORMA reduzida

dobro = a=> 2*a  //return esta implicito

console.log(dobro(2))

ola = ()=> 'Ola'
//OU
ola =_=>'Ola'