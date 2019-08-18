// Global Variables
//----------------------------------------

// Crystal Variables
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    pink: {
        name: "pink",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// Functions
//----------------------------------------

// Applies random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts and restarts the game
var startGame = function() {

    // Reset the Current Score
    currentScore = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom (19, 120);

    // Set different values for each of the crystals (between 1 and 12)
    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    // Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // Testing Console
    console.log("------------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Pink " + crystal.pink.value + " | Yellow " + crystal.yellow.value);
    console.log("------------------------------")
}

// Respond to clicks on crystals
var addValues = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWin function
    checkWin();

    // Testing console
    console.log("Your Score: " + currentScore);

}

// Check if user won or lost and reset the game
var checkWin = function() {

    // Check if currentScore is larger then targetScore
    if(currentScore > targetScore) {
        alert("sorry. You lost!");
        console.log("You lost")

        // Add to loss counter
        lossCount++;

        // Change loss count
        $("#lossCount").html(lossCount);

        // Restart game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congrats! You Won!");
        console.log("You Won!");

        // Add to win count
        winCount++;

        // Add to win counter
        $("#winCount").html(winCount);

        // Restart game
        startGame();
    }



}

// Main Process
//----------------------------------------

// Starts game
startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
});

$("#green").click(function() {
    addValues(crystal.green);
});
$("#pink").click(function() {
    addValues(crystal.pink);
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
});

