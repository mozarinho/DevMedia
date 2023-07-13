//middleware pattern or chain of responsability

//1 Passo
const passo1= (ctx, next)=>{
ctx.valor1='mid1'
next()
}

//2 Passo
const passo2 = (ctx, next) =>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//EM uma aplicação web que tem requsição e resposta

const exec=(ctx, ...middleware)=>{ //Operador rest ... Recebe varias funções e ele junta isso dentro de um array
 const execPasso = indice =>{
     middleware && 
     indice< middleware.length && 
     middleware[indice](ctx, () => execPasso(indice+1))
 }
 execPasso(0)
}

const ctx ={}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);