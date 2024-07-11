function randomFromArray(arr){
  let rand = Math.floor(Math.random()*(arr.length));
  return arr[rand];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;