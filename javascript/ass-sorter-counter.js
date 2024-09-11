let randomNumbers = []
for(let num =0; num<15; num++){
randomNumbers.push(Math.floor(Math.random()*109))
}
randomNumbers.sort((a,b)=>a-b)
console.log(randomNumbers)
let count=0
for(let num of randomNumbers){
    if(num>25){
        count++
    }
}
console.log(randomNumbers)
console.log(count)