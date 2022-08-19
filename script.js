// Rock / Paper / Scissors game

//console.dir(document);   //will display the entire DOM in the console window

let playerSelection = '';    // eventListener click event
let computerSelection = 0;   //random  
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

/////// DOM MANIPULATION ////////////////

//// Title  //////////
const mainContainer = document.querySelector('.mainContainer');  //sets a new variable for the mainContainer area
const displayTitle = document.createElement('div');          //creates a new div and sets a new variable to a newly created 'div'

displayTitle.classList.add('introTitle');                   //adding a class '.introTitle' to the new div (displayTitle)
displayTitle.textContent = `Let's play Rock, Paper, Scissors!`;    //adds text to displaytitle
displayTitle.style.backgroundColor = "black";                 //sets the background style of displaytitle to X
displayTitle.style.textAlign = "center";

displayTitle.style.border = "2px solid green";
displayTitle.style.borderBottomColor = "red";
//displayTitle.style.color = "brown";
displayTitle.style.color = "white";

//mainContainer.appendChild(displayTitle);                  //appends the new div as a child to the mainContainer on the page
document.body.insertBefore(displayTitle, mainContainer);    //inserts the new div (displayTitle) in the dom 'before' the (mainContainer)



//// How to play /////
const displayArea = document.querySelector('.playArea');    //sets a new variable for the playArea
const displayContent = document.createElement('div');       //creates a new div and sets a variable to a newly created 'div'

displayContent.classList.add('gameInfo');                   //adding a class '.gameInfo' to the new div (displayContent)

displayArea.appendChild(displayContent);                    //appends the new div (displayContent) as a child to the playArea (displayArea)

displayContent.style.width = "450px";
displayContent.style.alignContent = "center";
displayContent.style.fontSize = "25px";
displayContent.style.overflowWrap;
displayContent.textContent = 'Choose your weapon!  Click on either ROCK, PAPER, or SCISSORS.';
                                                             //adds text to displayContent
 


////////// EVENT LISTENERS ///////////////
const btnChoice = document.querySelectorAll("button");    

btnChoice.forEach(button => {                                //each time a button is clicked, the console will log the target id
       
    button.addEventListener('click', e => { 
        playerSelection = e.target.id;
        computerSelection = computerPlay();
        
        //console.log('playerSelection = ', playerSelection, 'computerSelection = ', computerSelection);

        playRound(playerSelection, computerSelection); 

    }); 
});
   
 //////// GAME /////////////////////

    
    function computerPlay(){   //get random value for the computer players turn
        
        let randomChoice = getRandomNum(3);   //request random number, either 0, 1, or 2
        
        if (randomChoice == 0) { return ('rock')}
        if (randomChoice == 1) { return ('paper')}
        if (randomChoice == 2) { return ('scissors')}
         
    }

    function getRandomNum(max) {                        //passed function the number (3) from computerPlay(), will return random number (0, 1, or 2)
        return Math.floor(Math.random() * max);    
    }

    
    function playRound(playerSelection, computerSelection){                      
        if (playerScore == 5 || computerScore == 5) {                   //testing for end game          
        
            alert(`The game is now over! \n Your Score: ${playerScore} \n Computer's Score: ${computerScore} \n Tie Rounds: ${tieCount}`);
            
            if (playerScore == 5) { alert("You are the Winner! Great job! \n THANKS FOR PLAYING!") }
            if (computerScore == 5) { alert("You lost the game to the computer. \n Better luck next time. \n THANKS FOR PLAYING!") } 
        } 
        else {
            if (playerSelection == computerSelection) {                
                tieCount++;                                              // will be used to show the number of rounds ending in a tie
                console.log('tieCount = ', tieCount);
                return alert("It's a tie!");                            // TIE game
            } else {    
                if ((playerSelection == 'rock' && computerSelection == 'scissors') ||  
                    (playerSelection == 'paper' && computerSelection == 'rock')  ||
                    (playerSelection == 'scissors' && computerSelection == 'paper')) {          //check if player is the winner                
                                    
                    playerScore++;
                    console.log('playerScore = ', playerScore);
                    return alert(`You Win this round! ${playerSelection} beats ${computerSelection}`);   //return if player wins                            
                }  else {
                    computerScore++;
                    console.log('computerScore = ', computerScore);
                    return alert(`You Lose this round! ${computerSelection} beats ${playerSelection}`);  //return if computer wins 
                }                       
            }
        } 
    }
    
    
    
    
    




