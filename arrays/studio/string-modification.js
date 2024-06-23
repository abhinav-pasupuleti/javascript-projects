const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
let newStr2 = str.slice(3,10);
console.log(newStr);
newStr2 = newStr2.concat(newStr);
console.log(newStr2);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is ${str}, the new string is ${newStr2}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters that will be relocated: ");


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (Number(userInput) > str.length){
    userInput = 3;
    console.log(`Your input was longer than ${str.length} so now the userInput is 3`);
}
newStr = str.slice(0,userInput);
newStr2 = str.slice(userInput,10);
newStr2 = newStr2.concat(newStr);
console.log(newStr2);