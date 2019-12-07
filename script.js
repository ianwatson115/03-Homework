//all elements
var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate");
//checkboxes
var lengthEl = document.getElementById("length");
var passwordEl = document.getElementById("password");
var upperCaseEl = document.getElementById("uppercase");
var lowerCaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var specialEl = document.getElementById("special");

//arrays of strings
var specArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "}", "~", "\\"];
var smallCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bigCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//object of elements
const func = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numbers: getRandomNumber,
    special: getRandomSpecial
}

console.log(lengthEl);
console.log(specArray.length);
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecial());

generateEl.addEventListener("click", function (){
    var length = +lengthEl.value;
    var ifLower = lowerCaseEl.checked;
    var ifUpper = upperCaseEl.checked;
    var ifNumbers = numbersEl.checked;
    var ifSpecial = specialEl.checked;

    console.log(ifUpper);
    console.log(ifLower);
    console.log(ifNumbers);
    console.log(ifSpecial);

    passwordEl.innerText = generatePassword(ifUpper, ifLower, ifNumbers, ifSpecial, length);
    
})

function generatePassword(upper, lower, numbers, special, length){
    var genPassword = "";
    //need a way to filter out the unchecked boxes
    var typeCount = lower + upper + numbers + special;
    console.log(typeCount);

    //filtering through the checked boxes
    var typeArr = [{upper}, {lower}, {numbers}, {special}].filter(item => Object.values(item)[0]);
    console.log(typeArr);

    //checking if none of the boxes are checked
    if (typeCount === 0) {
        return "";
    } 

    //
    for (var i = 0; i < length; i+=typeCount) {
        typeArr.forEach(type => {
            var funcName = Object.keys(type)[0];
            // console.log(funcName);

            genPassword += func[funcName]();
            
        })
    }

    var finalPassword = genPassword.slice(0, length);

    return finalPassword;
}

    
function getRandomLower() {
    return smallCase[Math.floor(Math.random() * 26)];
}
function getRandomUpper() {
    return bigCase[Math.floor(Math.random() * 26)];
}
function getRandomNumber() {
    return numArray[Math.floor(Math.random() * 10)];
}
function getRandomSpecial() { 
    return specArray[Math.floor(Math.random() * 27)];
}
//copy password
copyEl.addEventListener("click", function () {
    /* Get the text field */
    var copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text to the clipboard!");
});
