function generatePassword() {
  var passwordLength = window.prompt(
    "Please Designate Password Length Between 8 to 12 Characters"
  );

  var lowerCase = window.prompt("Would you like to use lower case letters?");

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
    if (
      lowerCase === "yes" ||
      upperCase === "yes" ||
      numeric === "yes" ||
      specialCharacters === "yes"
    ) {
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
        retValue += charset.charAt(Math.floor(Math.random() * x));
      }
      return retValue;
    } else {
      window.alert(
        "Please choose between 1 to 12 characters for password length"
      );
    }
  } else {
    window.alert("Password length must be between 8 to 12 characters and you must type 'yes' to all availiable options for security purposes");
  }
  return "Please try again!";
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
