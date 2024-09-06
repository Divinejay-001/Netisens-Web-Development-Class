// let customerChoice =prompt('Please Enter The Car You Wish To Buy');
// const carInventory=[
//     "BMW",
// "TOYOTA",
// "MERCEDES BENZ",
// "AUDI",
// "BUGATTI",
// "CHEVROLET",
// "TESLA",
// "PORSCHE",
// "LAMBORGHINI",
// "FERRARI",
// ]
// if(car.length>0 && !isNaN(car)){
// carInventory=Text(carInventory);{
// console.log("Available car inventory:");
// if(car=BMW){
//     console.log('Congratulations You JUST Bought a BMW')
// }else if(car=TOYOTA){
//     console.log('Congratulations You Just Bought a TOYOTA')
// }else if(car=MERCEDESBENZ){
//     console.log('Congratulations You Just Bought a MERCEDESBENZ')
// }else if (car=AUDI){
//     console.log('Congratulations You Just Bought an AUDI')
// }else if (car=BUGATTI){
//     console.log('Congratulations You Just Bought a BUGATTI')
// }else if (car=CHEVROLET){
//     console.log('Congratulations You Just Bought a CHEVROLET')
// }else if (car=TESLA){
//     console.log('Congratulations You Just Bought a TESLA')
// }else if (car=PORSCHE){
//     console.log('Congratulations You Just Bought an PORSCHE')
// }else if (car=LAMBORGHINI){
//     console.log('Congratulations You Just Bought an LAMBORGHINI')
// }else if (car=FERRARI){
//     console.log('Congratulations You Just Bought an FERRARI')
// }else{
//     console.log('Please this car is not available')
// }
// }let customerChoice = prompt('Please Enter The Car You Wish To Buy');
// const carInventory = [
//     "BMW",
//     "TOYOTA",
//     "MERCEDES BENZ",
//     "AUDI",
//     "BUGATTI",
//     "CHEVROLET",
//     "TESLA",
//     "PORSCHE",
//     "LAMBORGHINI",
//     "FERRARI",
//   ];
  
//   if (customerChoice.length > 0) {
//     customerChoice = customerChoice.toUpperCase();
//     if (carInventory.includes(customerChoice)) {
//       console.log(`Congratulations! You just bought a ${customerChoice}`);
//     } else {
//       console.log('Sorry, this car is not available');
//     }
//   } else {
//     console.log('Please enter a car model');
//   }

const carInventory = [
    "BMW",
    "TOYOTA",
    "MERCEDES BENZ",
    "AUDI",
    "BUGATTI",
    "CHEVROLET",
    "TESLA",
    "PORSCHE",
    "LAMBORGHINI",
    "FERRARI",
  ];
  
  let customerChoice = prompt("Please enter a car model (e.g., BMW, Toyota, etc.):");
  customerChoice = customerChoice.trim().toUpperCase();
  
  if (customerChoice.length > 0) {
    if (carInventory.includes(customerChoice)) {
      console.log(`Congratulations! You just bought a ${customerChoice}`);
    } else {
      console.log(`Sorry, ${customerChoice} is not available. Please try again.`);
    }
  } else {
    console.log("Please enter a car model.");
  }
  
  
  
  



