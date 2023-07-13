//JSon não transforma funções

const obj ={a:1, b:2, c:3, soma(){
    return a+b+c 
}}
//objeto para JSON
console.log(JSON.stringify(obj));

//JSON para objeto
console.log(JSON.parse('{"a":1,"b":2,"c":3}'));

console.log(JSON.parse('{"a": 1,"b": "string", "c": true, "d":{}, "e":[]}'));