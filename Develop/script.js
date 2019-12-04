var generate = document.getElementById("generate");
console.log(generate);
var copy = document.getElementById("copy")
var askLength = prompt("How long do you want your password to be?(enter a number from 8 to 128)"); 
var length = 0;



if (parseInt(askLength) >= 8 && parseInt(askLength) <= 128) {
    var askChars = prompt("Enter the special characters you want to include within your password");
    console.log(askLength);
    console.log(askChars);
    if (askChars.length > parseInt(askLength)){
        alert("You have entered an invalid amount of characters, please reload and try again!");
    } 
} else {
    alert("You have entered an invalid number, please reload and try again!");
}

function generate_() {
    //set the password length
    var passLength = parseInt(askLength);
    console.log(passLength);
    //characters in password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "~", "\\"];
    var specChar = "";
    
    for(var i = 0, n = charset.length; i < passLength; i++){
        for(var j = 0, m = special.length; j < askChars.length; j++){
            specChar += special*(Math.floor(Math.random()*m));
        }
        password += charset.charAt(Math.floor(Math.random()*n)) + specChar;
        console.log(password);
    }
    return document.getElementById("password").value = password;
        
}

function copy() {
    var copyText = document.getElementById("password");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}

document.getElementById("generate").addEventListener("click", generate_());
document.getElementById("copy").addEventListener("click", copy());