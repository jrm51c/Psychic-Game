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

        //display computer guess
        document.querySelector("#computerGuess").innerHTML = "Computer Guess: " + computerGuess;
        //display player guess
        document.querySelector("#playerGuess").innerHTML = "Your Guess: " + playerGuess;

        //compare player guess with computer guess and update the appropriate fields based upon results
        if (playerGuess === computerGuess)  {
            //update number of wins
            wins++;

            // player wins game when they guess correctly 3 times
            if (wins === 3)   {
            document.querySelector("#message").innerHTML = "You Win!!!!!!!!";
            //reset guesses remaining to default value
            guessesRemaining = 10;
            //reset guess history array to default value (empty)
            guessHistory.length = 0;

            }   else    {
            //reset guesses remaining to default value
             guessesRemaining = 10;
            //reset guess history array to default value (empty)
            guessHistory.length = 0; 

            }

        } else if (playerGuess !== computerGuess && guessesRemaining > 0)  {
            document.querySelector("#message").innerHTML = "You Really Suck!!!!!!!!";
            //update number of guesses remaining
            guessesRemaining--;
            var i = guessesRemaining;
            console.log(i);

            //for (i; i > 0; i--)  {
            //document.querySelector("#guess[i]").innerHTML = "Guess: " + playerGuess;
            //}

            //add current player guess to the guess history array
            guessHistory.push(playerGuess);
            //convert array to string
            guessHistory.toString();

            //display guess history
            document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory;
            //document.getElementById("#guessHistory").innerHTML = guessHistory.toString();

        }   else    {  
            document.querySelector("#message").innerHTML = "You Suck Loser!!!!!!!!";
            //update number of losses
            losses++;
        }


     }

