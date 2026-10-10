let name1 = "sujit"

console.log(name1[1]);
console.log(`My name is ${name1}`);

console.log(name1.length);

console.log("Uppercase string is :",name1.toUpperCase());

let getsubstring = name1.substring(1,3)
console.log(getsubstring);

let anothername = "   ABHIJIT   "
console.log(anothername);

let getTrim = anothername.trim();
console.log(getTrim);

let replaceString = "My name is Sujit";
console.log(replaceString.replace("My name is ","Name : "));

console.log(replaceString.includes("iss"));

// split('-') breaks a string into pieces wherever it finds the - character, and returns the pieces as an array.
let splitString = "My-name-is sujit"
console.log(splitString.split('-'));