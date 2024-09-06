// Conditionals are used to perform different actions based on different conditions. 
// The main conditional statements in JavaScript are:


// if Statement:

// if (condition) {
//   code to execute if condition is true
// }
let password= '12345678'
if(password === '12345678'){
console.log('logged in successfully')
}else{
    console.log('invalid credentials')
}
// alert('I love eating bread')
let score =prompt('Please enter your score');
console.log('score before trimming:'+ score)
console.log('length before trimming:'+score.length);

score = score.trim();
console.log('score after trimming:'+ score);
console.log('length after trimming:'+score.length);

if(score.length>0 && !isNaN(score)){


    score= Number(score);
    console.log('score after converting to number:'+ score)
if(score >=0 && score <=100){
if(score>= 70){
    console.log(`Congratulations you scored ${score} You have an A`)
}else if(score>=60){
    console.log('Congratulations you scored'+ score +', You  have a B')
}else if(score>=50){
    console.log('Congratulations you scored '+ score +', You have a C')
}else if(score>=45){
    console.log('Congratulations you scored '+ score +',  You have a D')
}else if(score<=44){
    console.log('Congratulations scored '+ score +',  You have an F come back next year dummy')
}else {
console.log('Invalid score')
}
// if(score>=0 && score)
//     console.log(`Score: ${numericScore} - Grade: ${grade}`);

// }
}
}
// }
// let score;
// console.log(typeof 'Musa');
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof '55');
// if(score < 0 || score>100){
//     console.log('invalid score')
// }
// console.log('length check:' +score.length);
// console.log('Number check:'+ isNaN(score))
// if(score>=0 && score<=100 &&!isNaN(score) &&score.length && score.trim() !==''){
// if(score>=70){
//     console.log('You have an A')
// }else if(score>=60){
//     console.log('You have a B')
// }else if(score>=50){
//     console.log('You have a C')
// }else if(score>=45){
//     console.log('You have a D')
// }else{
//     console.log('You have an F, come back next year dummy')
// }
// if(score!=0 || score!=100 ||isNaN(score)|| score.length<1){
//     console.log('Invalid input')
// }
// if(score>100){
//         console.log('Invalid score')
//     }if(score<0){
//         console.log('Invalid score')
//     }
// }

// if(score>100){
//     console.log('Invalid score')
// }if(score<0){
//     console.log('Invalid score')
// }
// if(score > 100){
//     console.log('invalid score')
// }else if(score < 0){
//     console.log('invalid score')

// }
// if(7<2){
//     console.log('codition valid');
// }else{
//     console.log('condition invalid');
// }

// console.log({score});

// console.log('length check:'+score.length)
// console.log(score.trim)
// let bankBalance = 70000;

// if(bankBalance > 80000){
//     console.log('rich Investor');
// }else if(bankBalance > 65000){
//     console.log('Agba baller');
// }else if(bankBalance > 50000){
//     console.log('Odogwu');
// }else if(bankBalance > 20000){
//     console.log('you are a Public servant');
// }else if(bankBalance > 10000){
//     console.log('you are broke');
// }else{
//     console.log('you are a broke bum');
// }



// if...else Statement:
// if (condition) {
//     code to execute if condition is true
//   } else {
//     code to execute if condition is false
//   }


// else if Statement:
// if (condition1) {
//     code to execute if condition1 is true
//   } else if (condition2) {
//     code to execute if condition2 is true
//   } else {
//     code to execute if neither condition1 nor condition2 is true
//   }
  

// switch Statement:
// switch (expression) {
//     case value1:
//       code to execute if expression === value1
//       break;
//     case value2:
//       code to execute if expression === value2
//       break;
//     add more cases as needed
//     default:
//       code to execute if expression doesn't match any case
//   }
// letnum = 2 + 5;
// switch (num){
//     case 7:
//         console.log('seven');
//         break;
//     case 4:
//         console.log('four');
//         break;
//     default:
//         console.log('invalid number');
