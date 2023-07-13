//node faz cache dos modulos, ja que so fez a exportação do objeto sem usar a função factory
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}