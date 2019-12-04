var generate = document.getElementById("#generate");
var copy = document.getElementById("#copy")
var askLength = prompt("How long do you want your password to be?(enter a number from 8 to 128)"); 
var length = 0;


if (askLength.parseInt < 8 || askLength.parseInt > 128){
    alert("You have entered an invalid number, please reload and try again!");
} else {
    var askChars = prompt("Enter the special characters you want to include within your password");
    if (askChars.length > askLength.parseInt){
        alert("You have entered an invalid amount of characters, please reload and try again!");
    } 
}

function generate() {
    //set the password length
    var passLength = askLength.parseInt();
    //characters in password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "~", "\\"];
    var specChar = "";
    
    for(var i = 0, n = charset.length; i < passLength; i++){
        for(var j = 0, m = special.length; j < askChars.length; j++){
            charset += special.charAt(Math.floor(Math.random()*m));
        }
        password += charset.charAt(Math.floor(Math.random()*n));
    }
    return password;
}



generate.addEventListener("click", generate());