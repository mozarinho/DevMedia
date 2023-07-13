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

     console.log(user1.getName());