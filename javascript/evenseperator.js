let randomNumbers =[];
console.log(randomNumbers)
for(let i =1; i <= 20; i++){
    let randomNumber= Math.random();
    
randomNumber=randomNumber*30;
randomNumber=Math.round(randomNumber)
randomNumbers.push(randomNumber)
}
console.log(randomNumbers)

let evenNumbers=[]
let oddNumbers=[]

for(let num of randomNumbers){
    if(num% 2===0){
        evenNumbers.push(num)
    }else{
        oddNumbers.push(num)
    }
}
console.log(oddNumbers)
console.log(evenNumbers)