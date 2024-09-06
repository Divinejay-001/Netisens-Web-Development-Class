randomNumbers=[]
for(let num=1; num<=20; num++){
randomNumbers.push(num)
}
console.log(randomNumbers)
evenNumbers=[]
oddNumbers=[]
for(let num of randomNumbers ){
if(num %2===0){
evenNumbers.push(num)
}else{
    oddNumbers.push(num)
}
}
console.log(evenNumbers)
console.log(oddNumbers)


