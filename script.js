// Element References
var passwordLength = document.querySelector("#password-length");
var lowerCase = document.querySelector("#lower-case");
var upperCase = document.querySelector("#uper-case");
var numeric = document.querySelector("#numeric");
var specialCharacters = document.querySelector("#special-characters");

//Character sets
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericSet = "0123456789";
var specialSet = ""` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);