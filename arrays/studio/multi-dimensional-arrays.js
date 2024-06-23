let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";


//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let userInput = input.question("Select a cabinet (0-3) in the cargohold: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`The have selected cabinet ${userInput} which contains: ${cargoHold[userInput]}`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let bonusCab = input.question("Select a cabinet (0-3) in the cargohold: ");
let bonusItem = input.question("Select a particular item you want: ");

//console.log(cargoHold[bonusCab].includes(bonusItem));
if(cargoHold[bonusCab].includes(bonusItem))
{
    console.log(`Cabinet ${bonusCab} DOES contain ${bonusItem}`);
}
else
{
    console.log(`Cabinet ${bonusCab} DOES NOT contain ${bonusItem}`);
}