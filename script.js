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
var specialSet = ""` !"#$%&'()*+,-./:;<=>?@^_{|}~`;

function generatePassword() {
    var passwordLength = window.prompt(
      "Please Designate Password Length Between 8 to 12 Characters"
    );
  
    var lowerCase = window.prompt(
      "Would you like to use lower case letters?"
    );
  
    var upperCase = window.prompt(
      "Would you like to use upper case letters for added sercurity?"
    );
  
    var numeric = window.prompt(
      "Would you like to use numbers for added security?"
    );
  
    var specialCharacters = window.prompt(
      "Would you like to use special characters for added security?"
    );
  
    if (passwordLength >= 8 && passwordLength <= 12) {
      if (lowerCase === "yes" || 
      upperCase === "yes" || 
      numeric === "yes" || 
      specialCharacters === "yes") 
      {
        //valid
        // var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
        var charset = "";
          if (lowerCase === "yes") {
            charset = charset + "abcdefghijklmnopqrstuvwxyz";
          }
          if (upperCase === "yes") {
            charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          }
          if (numeric === "yes") {
            charset = charset + "0123456789";       
          }
          if (specialCharacters === "yes") {
            charset = charset + "!#$%&'()*+,-./:;<=>?@^_`{|}~";
          }
          
        var retValue = "";
        for (var i = 0, x = charset.length; i < passwordLength; ++i) {
          retValue += charset.charAt(Math.floor(Math.random() * x ));
        }
        return retValue;
      }  else {
        window.alert("You must type 'yes' to a minimum of one of the four options! for security purposes"); 
        }
    }   else {
        window.alert("Please choose a number between 8 and 12");     
    }
    return "Please try again!"
  }
  
  
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