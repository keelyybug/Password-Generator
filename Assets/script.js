
var charLength = 8;
var choiceArr = []; //where you will store all possible answers

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '?', '/', '>', '<', ')', '(', '-', '=', '+', '*', '&', '^', '%', '$', '#', '|', '@', '!', ']', '[', '{', '}', ']', ')'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Add event listener to generate button
var generateBtn = document.querySelector("#generate")//given moved under char variables

generateBtn.addEventListener("click", writePassword);//given

//-----------------------------------------------------------------------------
function writePassword() { //given- moved under generate btn
  var correctPrompts = askLength(); //returns true or false
  var passwordText = document.querySelector("#password");//given and moved above if statement 
      
    if (correctPrompts) {
      var newPassword = generatePassword();//given
      passwordText.value = newPassword;//given
    } else {
        passwordText.value = '';
    }
}
//-----------------------------------------------------------------------

function generatePassword() {
  var password = '';
  
    for (let index = 0; index < charLength; index++) {
      var randomIndex =Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
    }
    return password;
}
// -------------------------------------------------------------------
function askLength(){
  choiceArr = [];
  charLength= parseInt(prompt("How many characters would you like your password to contain (between8 and 128)?"))

   if (isNaN(charLength) || charLength < 8 || charLength >128) {
    alert("Password length must be between 8 digits and 128 digits")
     return choiceArr;
  }
  if(confirm("Click Ok to confirm including special characters.")){
    choiceArr = choiceArr.concat(special);
  }
  if(confirm("Click Ok to confirm including numeric characters.")){
    choiceArr = choiceArr.concat(numbers);
  }
  if(confirm("Click Ok to confirm including lowercase characters.")){
    choiceArr = choiceArr.concat(lower);
  }
  if(confirm("Click Ok to confirm including uppercase characters.")){
    choiceArr = choiceArr.concat(alphabet);
  }
  return true;
}




