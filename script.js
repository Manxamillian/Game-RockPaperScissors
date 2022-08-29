// Rock / Paper / Scissors game

let playerSelection = '';    // eventListener click event
let computerSelection = 0;   //random  
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;


/////// DOM MANIPULATION ////////////////

                   ///// HEADER - TITLE - LET'S PLAY ROCK PAPER SCISSORS /////////////////
const mainContainer = document.querySelector('.mainContainer');  //sets a new variable for the mainContainer area
const displayTitle = document.createElement('div');             //creates a new div and sets a new variable to a newly created 'div'

displayTitle.classList.add('introTitle');                       //adding a class '.introTitle' to the new div (displayTitle)
displayTitle.textContent = `Rock, Paper, Scissors`;             //adds text to displaytitle
displayTitle.style.backgroundColor = "black";                   //sets the background style of displaytitle to X
displayTitle.style.textAlign = "center";
displayTitle.style.padding = "10px";
displayTitle.style.border = "4px solid rgb(252, 211, 29)";
displayTitle.style.fontSize = "50px";
displayTitle.style.color = "white";
displayTitle.style.fontFamily = "Calibri, Candara, Segoe, Optima, Arial, sans-serif";

document.body.insertBefore(displayTitle, mainContainer);        //inserts the new div (displayTitle) in the dom 'before' the (mainContainer)

                   ///// SUB HEADING - CHOOSE YOUR WEAPON /////////////////
const playerTitle = document.querySelector('.subHeaderTxt');

playerTitle.textContent = `Lets Play! \r\n`;
playerTitle.textContent += "Choose your weapon!";
playerTitle.style.alignContent = "center";
playerTitle.style.padding = "50px";
playerTitle.style.color = "black";
playerTitle.style.fontSize = "22px";

const displayArea = document.querySelector('.playArea');        //sets a new variable for the playArea
                   
                    ///// DISPLAY RUNNING TOTALS /////////////////
const displayRunningTotals = document.createElement('div');

displayArea.appendChild(displayRunningTotals);
displayRunningTotals.classList.add('runningTotals');            //adding a class '.runningTotals' to the new div (displayRunningTotals)

displayRunningTotals.textContent = `Your score = 0, Computer Score = 0, Number of Tie Games = 0`;
displayRunningTotals.style.color = "black";
displayRunningTotals.style.padding = '20px';


                   ///// DISPLAY EACH ROUND INFO /////////////////
const displayContent = document.createElement('div');           //creates a new div and sets a variable to a newly created 'div'

displayArea.appendChild(displayContent);                        //appends the new div (displayContent) as a child to the playArea (displayArea)
displayContent.setAttribute('style', 'white-space: pre;');      //must be added so that the 'carriage return' code will work
displayContent.classList.add('gameInfo');                       //adding a class '.gameInfo' to the new div (displayContent)
displayContent.style.padding = "50px";
displayContent.style.alignItems = "center";
displayContent.style.fontSize = "30px";
displayContent.style.overflowWrap;
displayContent.style.color = "black";
displayContent.style.fontFamily = "Calibri, Candara, Segoe, Optima, Arial, sans-serif";                                                           


                    /////// EVENT LISTENERS ///////////////
const btnChoice = document.querySelectorAll("button");    

btnChoice.forEach(button => {                                   //each time a button is clicked, the console will log the target id
     
    button.addEventListener('click', e => { 
        playerSelection = e.target.id;
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerPlay();        
        let roundResults = playRound(playerSelection, computerSelection); 
        displayRunningTotals.textContent = `Your score = ${playerScore} Computer Score = ${computerScore} Number of Tie Games = ${tieCount}`;
               
    });    
});
                   

                    /////////  COMPUTER PLAYERS RANDOM SELECTION /////////////////////////////////////////////
    function computerPlay(){                                    //get random value for the computer players turn
        
        let randomChoice = getRandomNum(3);                     //request random number, either 0, 1, or 2
        console.log('computers choice = ', randomChoice);
        if (randomChoice == 0) { return ('ROCK')}
        if (randomChoice == 1) { return ('PAPER')}
        if (randomChoice == 2) { return ('SCISSORS')}
         
    }

    function getRandomNum(max) {                                //passed function the number (3) from computerPlay(), will return random number (0, 1, or 2)
        return Math.floor(Math.random() * max);    
    }

    //////////////////////////////  PLAY ROUND /////////////////////////////////////////////
    function playRound(playerSelection, computerSelection){  
        let roundResults = '';
               
        if (playerSelection == computerSelection) {                
        tieCount++;                                              // will be used to show the number of rounds ending in a tie
            console.log('tieCount = ', tieCount);
            roundResults = `Tie Game!\r\n`;
            roundResults += `You both selected ${playerSelection} \r\n`;
            roundResults += `Choose again`;
            displayContent.textContent = roundResults;
        } else {    
            if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||  
                (playerSelection == 'PAPER' && computerSelection == 'ROCK')  ||
                (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')) {          //check if player is the winner                
                                
                playerScore++;
                console.log('playerScore = ', playerScore);                
                roundResults = `You WIN this round! \r\n`;
                roundResults += `${playerSelection} beats ${computerSelection}`;                 
                displayContent.textContent = roundResults;
                endOfGame();                           
            }  else {
                computerScore++;
                console.log('computerScore = ', computerScore);                
                roundResults = "You LOSE this round! \r\n";
                roundResults += `${computerSelection} beats ${playerSelection}`;
                                
                displayContent.textContent = roundResults;
                displayRunningTotals.textContent = 
                endOfGame();
            }                       
        }

        function endOfGame () {
            if (playerScore == 5) {                 
                //roundResults =  `The game is now over! \r\n`;
                roundResults =  "You are the WINNER! \r\n";
                roundResults +=  `Your Score: ${playerScore} \r\n`;
                roundResults +=  `Computer's Score: ${computerScore} \r\n`;
                roundResults +=  `Rounds ending in a Tie: ${tieCount} \r\n`;
                roundResults +=  "Great job! \r\n";
                roundResults +=  "THANKS FOR PLAYING! \r\n";
                displayContent.textContent = roundResults; 
                              
            }
                
            if (computerScore == 5) {                 
                roundResults =  "You lost the game to the computer. \r\n";                
                roundResults +=  `Computer's Score: ${computerScore} \r\n`;
                roundResults +=  `Your Score: ${playerScore} \r\n`;
                roundResults +=  `Rounds ending in a Tie: ${tieCount} \r\n`;                
                roundResults +=  "Better luck next time. \r\n";
                roundResults +=  "THANKS FOR PLAYING! \r\n";
                displayContent.textContent = roundResults;                                
            }            
        } 
    } 
     ///// TO DO LIST /////////////////

  
 /// 1. add a restart/new game button - should be able to reset everything and start new game at any time - so reset all 
 ///    note that i'm using the querySelectorAll("button") for the eventListener
  
 /// 2. set up endOfGame "stop listening' -  not allow user to click on any of the buttons, except the 'start a new game' button
 
    
    
    
    
    




