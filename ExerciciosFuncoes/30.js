
function MaiorEMenor(vetor1) {
   // let maior
    // let menor
    let maior =0 
    let menor =vetor1[0]
    for(let i=0; i< vetor1.length; i++ ){
        //if(maior === undefined && menor === undefined){
    if(vetor1[i]>maior){
        maior = vetor1[i]
    }
    if(vetor1[i]<menor){
        menor = vetor1[i]
    }
        
    }
    return [maior, menor]
}

vetor1 =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(MaiorEMenor(vetor1))

 