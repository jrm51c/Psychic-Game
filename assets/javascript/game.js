// create variables
//===============================================================
// store player wins
var wins = 0;
// store player losses
var losses = 0;
// store current player guess
var playerGuess;
// array to store history of player guesses
var guessHistory = [];
// store number of remaining player guesses. Player begins game with 10 guesses available
var guessesRemaining = 10;
// array that lists out all of the computer options (the alphabet).
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// store computer guess
var computerGuess;
// boolean to determine player status
var winner;
//=================================================================

// functions
//=================================================================

// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        //hide win message if applicable
        document.getElementById("winMessage").style.display = "none";

        //hide lose message if applicable
        document.getElementById("loseMessage").style.display = "none";

        //Randomly selects a choice from the options array and stores value. This is the Computer's guess.
        //comparing to nmber of guesses remaining ensures computer only selects one choice per game
        if (guessesRemaining === 10)  {
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length - 1)];
        };

        console.log(computerGuess);
        // Determines which key player pressed and stores value 
        playerGuess = event.key;
        console.log(playerGuess);
        console.log(guessesRemaining);

        // search guess history array to determine if user has already guessed this letter
        // prevent user from selecting non alpha characters
        if (guessHistory.indexOf(playerGuess) === -1 && /^[a-zA-Z]+/.test(playerGuess) && guessesRemaining > 0) {
            // add current guess to guess history
            guessHistory.push(playerGuess);
            //display guess history
            document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory;
            //decrease guesses remaining by 1
            guessesRemaining--;
            //display number of guesses remaining
            document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;
        }   else  {
            alert("invalid choice, please choose again");
        }

        console.log(guessesRemaining);

        //compare player guess with computer guess and update the appropriate fields based upon results
        if (playerGuess !== computerGuess && guessesRemaining === 0)    {
            //inform player they lost the game
            youLose();
        }
                    
        if (playerGuess === computerGuess)  {
            //inform player they won the game
            youWin();
        }
            

        function youWin()   {
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
        }

        function youLose() {
            //inform player they won the game
            document.getElementById("loseMessage").style.display = "block";
            
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

