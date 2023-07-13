const times = ['Sao Paulo', 'flamengo', 'vasco', 'corinhtians']
times.pop() //remove o ultimo elemento
times.push('Palmeiras')
times.shift()  //remove o primeiro elemento
console.log(times)
times.unshift('SaoPaulooooo')  //add na primeira posição
console.log(times)

//splice ADD
times.splice(2,0, 'Sport', 'Botafogo')
console.log(times) 

//splice REMOVE
times.splice(3,1) // remove a partir do indice 3 , 1 elemento
console.log(times)

console.log('*****************')

const algunsTimes = times.slice(2) //novo array 
console.log(algunsTimes)
console.log(times)

const algunsTimes2 = times.slice(1,4) //não inclui o 4 elemento
console.log(algunsTimes2)
