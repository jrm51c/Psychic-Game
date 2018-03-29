// create variables
//===============================================================
// store player wins
var wins = 0;
// store player losses
var losses = 0;
// store current player guess
var playerGuess;
// array to store history of player guesses
var guessHistory = new Array();
// store number of remaining player guesses. Player begins game with 10 guesses available
var guessesRemaining = 10;
// array that lists out all of the computer options (the alphabet).
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// store computer guess
var computerGuess;
// array to store current guess failure messages
var badGuess = ["nice try", "that was close", "you nearly guessed it", "getting warmer", "not even close"]
//=================================================================

// functions
//=================================================================

// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key player pressed and stores value 
        playerGuess = event.key;
  
        //Randomly selects a choice from the options array and stores value. This is the Computer's guess.
        //comparing to guesses remaining ensures computer only selects one choice per game
        if (guessesRemaining === 10)  {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length - 1)];
        }


        //clear computer guess if applicable
        document.querySelector("#computerGuess").innerHTML = "Computer Guess: ";

        //display player guess
        document.querySelector("#playerGuess").innerHTML = "Your Guess: " + playerGuess;
        
        //hide win message if applicable
        document.getElementById("winMessage").style.display = "none";

        //hide lose message if applicable
        document.getElementById("loseMessage").style.display = "none";

        //compare player guess with computer guess and update the appropriate fields based upon results
        if (playerGuess === computerGuess)  {
            //inform player they won the game
            document.getElementById("winMessage").style.display = "block";
            
            //update number of wins
            wins++;

            //display number of wins
            document.querySelector("#wins").innerHTML = "Wins: " + wins;

            //reset guesses remaining to default value
            guessesRemaining = 10;

            //reset guess history array to default value (empty)
            guessHistory.length = 0;


        } else if (playerGuess !== computerGuess && guessesRemaining > 0)  {
            //update number of guesses remaining
            guessesRemaining--;

            //display number of guesses remaining
            document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;

            //add current player guess to the guess history array
            guessHistory.push(playerGuess);

            //convert array to string
            guessHistory.toString();

            //display guess history
            document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory;

        }   else    {  
            //inform player they lost the game
            document.getElementById("loseMessage").style.display = "block";

            //display computer guess
            document.querySelector("#computerGuess").innerHTML = "Computer Guess: " + computerGuess;

            //update number of losses
            losses++;

            //display number of losses
            document.querySelector("#losses").innerHTML = "Losses: " + losses;

            //reset guesses remaining to default value
            guessesRemaining = 10;

            //reset guess history array to default value (empty)
            guessHistory.length = 0;
        }


     }

