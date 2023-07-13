 //Pode usar uma factory , ja que retorna um novo Objeto (instancia)

 module.exports= ()=> {
     return{
         valor:1,
         inc(){
             this.valor++
         }
     }
 }