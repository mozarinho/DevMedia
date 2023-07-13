function Pessoa() {
    this.idade =0

    setInterval(()=> {
        this.idade++
        console.log(this.idade)
    }, 1000)
    
}
new Pessoa

//Vantagem de usar a função arrow: O this não varia de acordo com quem esta chamando