// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
// get user length
var length = parseInt(prompt("How many characters?(between 8-10);"));
if (length < 8) {
  alert ("need at least 8 characters")
  return
}
var includeSpecial = confirm("include special characters?");
var includeNumeric = confirm("include Numeric characters?");
var includeLowercase = confirm("include Lowercase characters?");
var includeUppercase = confirm("include Uppercase characters?");


var passwordOptions = {
  length : length,
  includeSpecial: includeSpecial,
  includeNumeric: includeNumeric,
  includeUppercase: includeUppercase,
  includeLowercase: includeLowercase,
}
  return passwordOptions
}


// Function for getting a random element from an array
function getRandom(arr){
var randomIndex = Math.floor( Math.random()*arr.length);
var randomElement = arr[randomIndex]
return randomElement

}

// Function to generate password with user input
function generatePassword() { 
 var options = generatePassword();
 var passwordText= input;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);