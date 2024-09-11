// let display ="";
// let computerDisplay="";
// let randomNumbers=[]
// for(let num=0; num<=9; num++){
//     randomNumbers.push(Math.floor(Math.random()*9))
// }console.log(randomNumbers)

// const display = document.getElementById('display')
// function appendToDisplay(input){
//     display.value += input;
// }
// function updateInput(buttonValue) {
//     document.getElementById('input-field').value += buttonValue + ' ';
//   }
// const computerDisplay = document.getElementById('computerDisplay') 
// function random(){
//     display.value = input
// }
// for(let num of randomNumbers){
//     if(num!==randomNumbers){
//    alert('You have won the price')     
// }else{
//     alert('You have failed try again')
// }
// }console.log(randomNumbers)
// function calculate(){
//     try{
//         display.value =eval(display.value)
//     }
//     catch(error){
//         display.value="Error"
//     }
// }
const divine= document.getElementById('display') 
const saviour= document.getElementById('computerDisplay') 
let display = '';
let computerDisplay = '';

function appendToDisplay(num) {
  display = num;
  document.getElementById('display').value = display;
}

function enter() {
  computerInput = Math.floor(Math.random() * 10); // generates a random number between 0 and 9
  document.getElementById('computerDisplay').value = computerInput;
  
  if(!display){
    alert('Enter A Number')
  }
  if (display === computerDisplay) {
    alert('You have won a prize!');
} else {
    alert(' You have failed. Try again!');
  }
 }
  display = ''; // reset user input

function clearDisplay(){
 divine.value='';
 saviour.value='';
}
const music = document.getElementById('backgroundSound');

// music.play('backgroundSound')

// window.onload =function(){
//   const music=document.getElementById('backgroundSound')
//   music.play('backgroundSound');
// }
// // backgroundSound.pause()
// backgroundSound.currentTime=0
