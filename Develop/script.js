var generate = document.getElementById("#generate");
var copy = document.getElementById("#copy")
var askLength = prompt("How long do you want your password to be?(enter a number from 8 to 128)"); 
var length = 0;


if (askLength.parseInt < 8 || askLength.parseInt > 128){
    alert("You have entered an invalid number, please reload and try again!");
} else {
    var askChars = prompt("Enter the special characters you want to include within your password");
}
function generate() {
    //set the password length
    var passLength = askLength.parseInt();
    //characters in password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var value = ""
    var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "~", "\\"];
    
    
    for(var i = 0, n = charset.length; i < passLength; i++){

    }

}

generate.addEventListener("click", generate);