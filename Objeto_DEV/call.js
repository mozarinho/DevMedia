function User (id, name) {
               this.id = id;
               this.name = name;
    }
   
    User.prototype.getId = function () {
               return this.id;
    };
   
     User.prototype.getName = function () {
              return this.name;
     };
    
     var user1 = new User(1, 'Bruno');

     //um novo prototipo AccountUser
     //Irá aproveitar os atributos id e name, bem como os métodos getId e getName;
     // Irá incluir os atributos login e password
     //Irá sobrecarregar o método getId fazendo com que retorne o valor do protótipo original, concatenado ao nome do usuário.

function AccountUser(id, name, login, password) {
   //Como a função call funciona para funções, 
   //não utilizamos o operador new para referenciarmos o construtor de User.
    User.call(this, id, name);
    this.login = login;
    this.password = password;
}
//estamos copiando todo o conteúdo do protótipo User para o protótipo AccountUser
AccountUser.prototype = new User();
//Object.setPrototypeOf(AccountUser, User);
AccountUser.prototype.getLogin = function () {
    return this.login;
};

AccountUser.prototype.getPassword = function () {
    return this.password;
};

AccountUser.prototype.getId = function () {
    return User.prototype.getId.call(this) + " "+ this.name;
};

var accountUser = new AccountUser(2, 'Alex', 'aruiz', 'abcd1234');
console.log(accountUser);
console.log(accountUser.getId());