
String.prototype.reverter= function(){
    return this.split(' ').reverse().join('');
}

console.log("Marcio Mozart".reverter());