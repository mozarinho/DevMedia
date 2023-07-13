function salarioCalcular(horasMensal, valorHora) {
    const SalarioBruto = (horasMensal*valorHora)
    const salarioliquido = SalarioBruto - SalarioBruto*0.3
    
    return `Salario igual a R$ ${salarioliquido}`  
}

console.log(salarioCalcular(100, 10));