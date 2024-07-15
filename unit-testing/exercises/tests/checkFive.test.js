const checkFive = require('../checkFive.js');

describe("checkFive", function()
{
    test("The test case for if the number is 5 has failed", function()
    {
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });

    test("The test case for if the number is < 5 has failed", function()
    {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });

    test("The test case for if the number is > 5 has failed", function()
    {
        let output = checkFive(7);
        expect(output).toBe("7 is greater than 5.");
    });
});