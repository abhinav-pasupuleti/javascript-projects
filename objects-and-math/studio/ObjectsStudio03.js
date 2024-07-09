// Code your crewMass function here:
function crewMass(crew){
  let overallMass = 0;

  for(let i = 0; i < crew.length; i++){
    overallMass += crew[i].mass;
    if(crew[i].species === 'dog'|| crew[i].species === 'cat'){
      overallMass += 200;
    }
    else
    {
      overallMass += 100;
    }
  }
  return overallMass;
}

// Code your fuelRequired function here:
function fuelRequired(crewWeight, rocketMass){
  let overallWeight = crewWeight + rocketMass;
  console.log(`The mission has a launch mass of ${overallWeight} kg and requires ${Math.round(overallWeight*9.5)} kg of fuel.`)
  return Math.round(overallWeight*9.5);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
 let crewWeight = crewMass(crew);
 fuelRequired(crewWeight, 75000);