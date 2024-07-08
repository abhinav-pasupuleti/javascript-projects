let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function (){
      return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function (){
      return Math.round(Math.random()*10);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function (){
      return Math.round(Math.random()*10);
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function (){
      return Math.round(Math.random()*10);
   }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function (){
      return Math.round(Math.random()*10);
   }
};



// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

// Print out the relevant information about each animal.

function crewReports(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
}
crewReports(waterBear);

// Start an animal race!
function fitnessTest(arr){
   let turns = [];
   let stepCheck = 0;
   let turnCount = 0;

   for(let i = 0; i < arr.length; i++){
      while(stepCheck <= 20){
         stepCheck += arr[i].move();
         turnCount++;
      }
      turns.push(`${arr[i].name} took ${turnCount} turns to take 20 steps.`);
      turnCount = 0;
      stepCheck = 0;
   }

   return turns;
}

let results = [];
results = fitnessTest(crew);

for(let i = 0; i < results.length; i++){
   console.log(results[i]);
}