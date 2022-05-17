// Rock / Paper / Scissors game

const initialPlayerSelection = "paper";             //TEMP -- hardcoded playerSelection value - need to set up input from user (HTML) 
const playerSelection = capitalize(initialPlayerSelection);  //change user input to 'first letter in caps, the rest lowercase
console.log(playerSelection);





function capitalize(initialPlayerSelection) {
    return initialPlayerSelection.charAt(0).toUpperCase() + initialPlayerSelection.slice(1).toLowerCase();    
}

const computerSelection = computerPlay();     //function returns random result for the computer player
console.log(computerSelection);

function computerPlay(){   

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

playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection){      //play a round using the player input and the random computerSelection 
    //not checking here for invalid input for playerSelection.  Use images/buttons for options instead
    let playerWins;

    if (playerSelection == computerSelection) {
        console.log('tie');
        return ("It's a tie!  Try again.");            // TIE game
    } else {
        
        console.log(playerWins);
        console.log(playerSelection, computerSelection);   //check value before IF statement is run
        if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||  
            (playerSelection == 'Paper' && computerSelection == 'Rock')  ||
            (playerSelection == 'Scissors' && computerSelection == 'Paper')) {  //check if player is the winner                
            
            playerWins = 'true';                
        } 
            console.log(playerWins);

        if (playerWins == 'true'){ 
            console.log('winner');
            return (`You Win! ${playerSelection} beats ${computerSelection}`);   //return if player wins               
        } else {
            console.log('loser');
            return (`You Lose! ${computerSelection} beats ${playerSelection}`);  //return if computer wins            
        }
    }    
}




