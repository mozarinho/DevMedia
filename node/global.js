//console.log(global);
/*
global.MinhaApp={
    saudacao(){
        return 'Estou em todos os lugares'

    },
    nome: 'Sistema Legal'
}
*/
//Usando o freeze
global.MinhaApp=Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares'

    },
    nome: 'Sistema Legal'
})