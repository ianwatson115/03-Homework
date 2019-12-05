var generate = document.getElementById("generate");
console.log(generate);
var copy = document.getElementById("copy")
var length = 0;
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "~", "\\"];
var smallCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bigCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(special);
console.log(smallCase);
console.log(bigCase);
console.log(numbers);




function generatePassword() {
    var askLength = prompt("How long do you want your password to be?(enter a number from 8 to 128)"); 
    if (parseInt(askLength) >= 8 && parseInt(askLength) <= 128) {
        var askChars = prompt("Select what you would like to include in your password: ");
        if (parseInt(askChars) > 4 || parseInt(askChars) < 1 ){
            alert("You have entered an invalid amount of characters, please reload and try again!");
        } else if (parseInt(askChars) >= 1 && parseInt(askChars) <= 4) {
            
        
    }
        console.log(askLength);
        console.log(askChars);
        
    } else {
        alert("You have entered an invalid number, please reload and try again!");
    }
    
    //
    
    
    //set the password length
    var passLength = parseInt(askLength);
    console.log(passLength);
    //characters in password
    var password = "";
    var specChar = "";
    
    for(var i = 0, n = charset.length; i < passLength; i++){
        for(var j = 0, m = special.length; j < askChars.length; j++){
            specChar += special*(Math.floor(Math.random()*m));
        }
        password += charset.charAt(Math.floor(Math.random()*n)) + specChar;
        console.log(password);
    }
    return document.getElementById("password").textContent = password;

}

function copy() {
    var copyText = document.getElementById("password").textContent;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}

document.getElementById("generate").addEventListener("click", generatePassword());
document.getElementById("copy").addEventListener("click", copy());