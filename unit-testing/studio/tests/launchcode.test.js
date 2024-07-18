// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check organization type", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  })
  
  test("check executive director", function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  })

  test("check percentage of Cool Employees", function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  })

  test("check programs offered", function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  })

  test("check launch output method", function(){
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
    expect(launchcode.launchOutput(3)).toEqual("Code!");
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    expect(launchcode.launchOutput(17)).toEqual("Rutabagas! That doesn't work.");
  })
});