const produtos = [
    { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
  ]
  
  let total = 0
  
  for (const index in produtos) {
    const { valor, quantidade } = produtos[index]
  
    total += valor * quantidade
  }
  
  console.log(total) // 121.3