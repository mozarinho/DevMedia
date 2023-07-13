//Melhoria 1

const a=1
const b=2
const c=3

const obj1 = {a:a, b:b, c:c}
const obj2 = {a,b,c}  //Versão nova

const notaAttr = 'nota'
const valorAttr = 7.4

const obj3 = {}
obj3[notaAttr] = valorAttr
console.log(obj3)

//versao Nova

const obj4={[notaAttr]:valorAttr}
console.log(obj4)

//Outra mudaça, de como definir funções dentro de um objeto literal 
//anterior
const obj5 = {
    funcao1: function () {
        //...
    }
}

//nova
const obj6 = {
    funcao2()  {
        //...
    }
}