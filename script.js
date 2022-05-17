// Rock / Paper / Scissors game

const initialPlayerSelection = "rock";             //TEMP -- hardcoded playerSelection value - need to set up input from user (HTML) 
const playerSelection = capitalize(initialPlayerSelection);  //change user input to all uppercase
console.log(playerSelection);

function capitalize(initialPlayerSelection) {
    return initialPlayerSelection.toUpperCase();    
}

const computerSelection = computerPlay();     //function returns random result for the computer player
console.log(computerSelection);

function computerPlay(){   

    let randomChoice = getRandomNum(3);   //request random number, either 0, 1, or 2
    
    if (randomChoice == 0) {      //using randomChoice value (0,1,or 2) to match corresponding string value
        return ('ROCK');                
    } else {
        if (randomChoice == 1) {
            return ('PAPER');                        
        } else {
            return ('SCISSORS');                            
        }
    }      
}

function getRandomNum(max) {        //passed function the number (3) from computerPlay(), will return random number (0, 1, or 2)
    return Math.floor(Math.random() * max);    
}

function playRound(playerSelection, computerSelection){      //play a round using the player input and the random computerSelection 
    //set the playerSelection string value to all uppercase
    // const playerSelection = "rock";    //hardcoding playerSelection value - need input in HTML for true value - TEMP
    playerValueUppercase();

    if (playerSelection !== computerSelection) {  //note: not checking here for invalid input for playerSelection.  Use images instead

        //check player win values here - there are 3 cases
        //playerSelection == 'ROCK' && computerSelection == 'SCISSORS'
        //playerSelection == 'PAPER' && computerSelection == 'ROCK'
        //playerSelection == 'SCISSORS' && computerSelection == 'PAPER'

        if (____){    
            return (`You Lose! ${computerSelection} beats ${playerSelection}`);  //return if computer wins
        } else {
            return (`You Win! ${playerSelection} beats ${computerSelection}`);   //return if player wins
        }
    } else {
        return ("It's a tie!  Try again.");    //return if it's a tie
    }
      
    
}




