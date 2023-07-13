var Users = (function () {
    var _id, _name;  //usar o _underscore signifca que o atrbuto é privado


    function User(id, name) {
        _id = id;
        _name = name;
    }

    User.prototype.getId = function () {
        return _id;
    };

    User.prototype.getName = function () {
        return _name;
    };
    return User
}())
var user1 = new Users(1, 'Mozart');
console.log(user1.name);
console.log(user1.getName());
console.log(user1.getId());

var AccountUsers= (function () {
   var _login, _password;
   
   function AccountUser(id, name, login, password) {

    Users.call(this, id, name);
    _login = login;
    _password = password;
}
AccountUser.prototype = new Users();
AccountUser.prototype.getLogin = function () {
    return _login;
};

AccountUser.prototype.getPassword = function () {
    return _password;
};

AccountUser.prototype.getId = function () {
    return Users.prototype.getId.call(this) + " " + this.getName();
};
return AccountUser
 
})()

var accountUser = new AccountUsers(2, 'Alex', 'aruiz', 'abcd1234');
console.log(accountUser);
console.log(accountUser.getId());
console.log(accountUser.getName());
