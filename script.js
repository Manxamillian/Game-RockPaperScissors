// Rock / Paper / Scissors game

//console.dir(document);   //will display the entire DOM in the console window

let initialPlayerSelection = '';
let playerSelection = '';
let computerSelection = '';
let roundNum = 1;
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

alert("Let's play Rock, Paper, Scissors!");   // game intro
game();

function game() {
    while (roundNum <= 5) {      
//TASK***for now - remove the logic that plays exactly five rounds ---------------------------------            
        playerSelection = playersChoice();       // get players choice
        computerSelection = computerPlay();     // get computer random choice
        console.log(playersChoice, computerSelection);

        playRound(playerSelection, computerSelection);  // play one round

        // Player choice section ----------------
        function playersChoice() {
            initialPlayerSelection = prompt(`Round ${roundNum}:  Enter either Rock, Paper, or Scissors`);   //prompt user for their choice 
//TASK***NEW Code here for buttons vs text entry --------------------
            playerSelection = capitalize(initialPlayerSelection);  //change user input to 'first letter in caps, the rest lowercase
            return playerSelection;
        }

        function capitalize(initialPlayerSelection) {   //sets first character toUpperCase() and the rest of the string toLowerCase()
            return initialPlayerSelection.charAt(0).toUpperCase() + initialPlayerSelection.slice(1).toLowerCase();    
        }

        // Computer player section ------------------
        function computerPlay(){   //get random value for the computer players turn

            let randomChoice = getRandomNum(3);   //request random number, either 0, 1, or 2
            
            if (randomChoice == 0) {      //using randomChoice value (0,1,or 2) to match corresponding string value
                return ('Rock');                
            } else {
                if (randomChoice == 1) {
                    return ('Paper');                        
                } else {
                    return ('Scissors');                            
                }
            }      
        }

        function getRandomNum(max) {        //passed function the number (3) from computerPlay(), will return random number (0, 1, or 2)
            return Math.floor(Math.random() * max);    
        }

        // play a round ----not checking here for invalid input from player.  Should use images/buttons for options instead
        function playRound(playerSelection, computerSelection){      //play a round using the player's input and the random computerSelection 
            
            if (playerSelection == computerSelection) {                
                tieCount++;         // will be used to show the number of rounds ending in a tie out of 5 rounds
                return alert("It's a tie!");            // TIE game
            } else {    
                        //nothing to handle invalid user input - (i.e. they enter rocks, scessors, or plastic etc...they will lose)
                if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||  
                    (playerSelection == 'Paper' && computerSelection == 'Rock')  ||
                    (playerSelection == 'Scissors' && computerSelection == 'Paper')) {  //check if player is the winner                
                                    
                    playerScore++;
                    return alert(`You Win this round! ${playerSelection} beats ${computerSelection}`);   //return if player wins                            
                }  else {
                    computerScore++;
                    return alert(`You Lose this round! ${computerSelection} beats ${playerSelection}`);  //return if computer wins 
                }                       
            } 
        }
        
        if (roundNum == 5) {    // show ending scores and tie count        
            
            alert(`The game is now over! \n Your Score: ${playerScore} \n Computer's Score: ${computerScore} \n Tie Rounds: ${tieCount}`);
            whoWon();
        } 
        
        function whoWon() {
            if (tieCount == 5){   // all 5 rounds ended in a tie
                    alert("Holy Cow! Five tie rounds in a row. \n No winner. \n THANKS FOR PLAYING!");
                } else {
                    if (playerScore == computerScore) {
                        alert("The game has ended in a tie! Good Game! \n THANKS FOR PLAYING!")
                    } else {
                        if (playerScore > computerScore) {
                        alert("You are the Winner! Great job! \n THANKS FOR PLAYING!");
                        } else {
                            alert("You lost the game to the computer. \n Better luck next time. \n THANKS FOR PLAYING!");
                        }
                    }
                }
        }
        roundNum++;              // increase roundNum by one each round
    }
}
console.log('hello');

