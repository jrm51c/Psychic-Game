// variables 
// =================================================================
// create variable to hold the number of player wins
var wins = 0;

// create variable to hold the number of player losses
var losses = 0;

// create an array that contains the alphabet for computer selection
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

// create a variable to hold letter chosen by the computer
var computerGuess;

// create variable to hold letter chosen by player
var playerGuess;

// create variable to hold the number of guesses player has left
// player is given 9 guesses to start the game
var guessesRemaining = 9;

// create array to hold letters the player has guessed so far
var guessList = [];


// functions
// ===================================================================
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determine which key was pressed and store value
playerGuess = event.key;
  
// Randomly select a letter from the computerChoices array to represent the computer's choice
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length - 1)];

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
if (playerGuess === computerGuess)    {
    // user correctly guesses letter, increment wins
    wins++;
    // reset guessesRemaining
    guessesRemaining = 9;
    // reset guessList array

}
else    {
    // user guess does not guess letter, increment losses
    losses++;
    // reset guessesRemaining
    guessesRemaining = 9;
    // reset guessList array
}

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html = "<p>wins: " + wins + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;


}
