const whoWon = require('../RPS.js');

describe("whoWon", function()
{
    test("The test case for if the two players have tied has failed", function()
    {
        let output = whoWon("paper","paper");
        expect(output).toBe("TIE!");
    });

    test("The test case for if player1 is rock and player 2 is paper has failed", function()
    {
        let output = whoWon("rock","paper");
        expect(output).toBe("Player 2 wins!");
    });

    test("The test case for if player1 is paper and player 2 is scissors has failed", function()
    {
        let output = whoWon("paper","scissors");
        expect(output).toBe("Player 2 wins!");
    });

    test("The test case for if player1 is scissors and player 2 is rock has failed", function()
    {
        let output = whoWon("scissors","rock");
        expect(output).toBe("Player 2 wins!");
    });
});