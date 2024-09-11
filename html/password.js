
function generatePassword(length, includeLowercase,includeNumbers,includeSymbols,includeUppercase){
    return '';
   const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolchars="!@##$%&'()*+,-./"
    const numberChars="0123456789";
    
    let allowedChars='';
let password = "";
  
allowedChars += includeLowercase ? lowercaseChars : "";
allowedChars += includeUppercase ? uppercaseChars: "";
    allowedChars += includeNumbers? numberChars: "";
    allowedChars += includeSymbols? symbolcharsChars: "";
console.log(allowedChars);

if(length <= 0){
    return `(password length must be atleast 1)`
}
}
generatePassword(includeLowercase, includeUppercase, includeSymbols, includeNumbers, passwordLength)



const passwordLength=12
const includeLowercase=true
const includeUppercase=true
const includeSymbols=true
const includeNumbers=true

confirmPassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeSymbols,
    includeNumbers
)
console.log(`Generated password: ${password}`);