// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return Math.round(2*Math.PI*radius);
}
console.log(orbitCircumference(2000));

// Code your missionDuration function here:
function missionDuration(numberOfOrbits, orbitRadius = 2000, orbitalSpeed = 28000){
  let distance = numberOfOrbits*orbitCircumference(orbitRadius);
  let time =  Math.round(distance/orbitalSpeed*100)/100;

  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`)
  return time;
}
  //missionDuration(5);
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idArr){
  let rand = Math.floor(Math.random()*(idArr.length));
  return idArr[rand];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitalRadius, orbitalSpeed){
  let duration = missionDuration(3, orbitalRadius, orbitalSpeed);
  //console.log(duration);
  let oxygenUsed = Math.round(candidate.o2Used(duration)*100000)/100000;
  //console.log(oxygenUsed);

  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`;
}


// Candidate data & crew array.
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
 
 let crew = [candidateA, candidateB,candidateC, candidateD, candidateE, candidateF];
 
 function smallestOxyConsumption(crew){
  let temp = crew[0];
  for(let i = 1; i < crew.length; i++)
  {
    if(crew[i].o2Used(1) < temp.o2Used(1)){
      temp = crew[i]
    }
  }

  return temp;
 }
 

 console.log(oxygenExpended(smallestOxyConsumption(crew), 20, 2));