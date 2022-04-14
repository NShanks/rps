let computerSelection;
let playerSelection;
let options = ['rock', 'paper', 'scissors'];
let computerWin = 0;
let playerWin = 0;
let number = 0

function game(playerSelection){
    computerSelection = (options[Math.floor(Math.random() * options.length)]);
    //playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    if (playerSelection === 'rock'){
        playRound('rock', computerSelection);
    } else if (playerSelection === 'paper'){
        playRound('paper', computerSelection);
    } else if (playerSelection === 'scissors'){
        playRound('scissors', computerSelection);
    } else {
        console.log('');
    }
}

function playRound(a, b){
    if (playerWin != 5 && computerWin != 5){
        chunkOfStuff.textContent = 'These are instructions coming from the JS file';
        compSelect.textContent = 'Computer selects: ' + b;
        playerSelect.textContent = 'You select: ' + a;
        if (a == 'rock' && b == 'scissors'){
            ++playerWin;
            playerWinCounter.textContent = 'Player wins: ' + playerWin;
            computerWinCounter.textContent = 'Computer wins: ' + computerWin;
            result.textContent = 'You Win!!!';
            //return playerWin
        } else if (a == 'paper' && b == 'rock'){
            ++playerWin;
            playerWinCounter.textContent = 'Player wins: ' + playerWin;
            computerWinCounter.textContent = 'Computer wins: ' + computerWin;
            result.textContent = 'You Win!!!';
            //return playerWin
        } else if (a == 'scissors' && b == 'paper'){
            ++playerWin;
            playerWinCounter.textContent = 'Player wins: ' + playerWin;
            computerWinCounter.textContent = 'Computer wins: ' + computerWin;
            result.textContent = 'You Win!!!';
            //return playerWin
        } else if (a == b){
            result.textContent = 'Tie Game!!!';
        } else {
            ++computerWin;
            playerWinCounter.textContent = 'Player wins: ' + playerWin;
            computerWinCounter.textContent = 'Computer wins: ' + computerWin;
            result.textContent = 'You Lose... why would you pick that?';
            //return computerWin
        }
    } else {
        chunkOfStuff.textContent = 'Game Over!!';
    }
}

// for (let gameCount = 0; gameCount < 5; gameCount++){
//     game();
// } //Only plays game exactly 5 times

//trying to edit and understand DOM divs and stuff---------------------------------------------------------------------------------

document.getElementById('1').onclick = function() {
    game('rock');
};
document.getElementById('2').onclick = function() {
    game('paper');
};
document.getElementById('3').onclick = function() {
    game('scissors');
};


const textEdits = document.querySelector('#instructions'); 
//^^ this is a SELECTOR were calling textEdits that is referencing the div in the html file
// called instructions. This is a now a hidden place within the instructions div in the html file
// to attach ELEMENTS to (new divs, buttons, etc.).
// you APPEND your created ELEMENTS to SELECTORS which are snuck inside of div s in the html file
// so you can edit all the stuff in the js file and have a neat html file
//^^ see--> <div id="instructions">

const chunkOfStuff = document.createElement('div');
const playerWinCounter = document.createElement('div');
const computerWinCounter = document.createElement('div');
const compSelect = document.createElement('div');
const playerSelect = document.createElement('div');
const result = document.createElement('div');
//^^this is declaring chunkOfStuff to be a new ELEMENT created and its going to be a div in this case
//^^ELEMENTS get edited/added to and then APPENDed (aka attached ig) into SELECTORS
//^^which are invisible sections injected into a div in the html file
//^^see appendChild at the bottom
//^^the thing in quotes is telling what chunkOfStuff will get added as. could be div, button, etc.

compSelect.textContent = 'Computer selects: ' + computerSelection;
playerSelect.textContent = 'You select: ' + playerSelection;
chunkOfStuff.textContent = 'These are instructions coming from the JS file';
playerWinCounter.textContent = 'Player wins: ' + playerWin;
computerWinCounter.textContent = 'Computer wins: ' + computerWin;
//^^this is text getting  added to the chunkOfStuff ELEMENT we created a line above
//^^when it gets APPENDed to a SELECTOR that references 
//^^a div (SELECTOR is called textEdits referencing a div in the html file called instructions)
//^^ in the html file, the chunkOfStuff gets placed inside that *invisible* div and becomes *visible*

textEdits.appendChild(chunkOfStuff);
textEdits.appendChild(playerWinCounter);
textEdits.appendChild(computerWinCounter);
textEdits.appendChild(playerSelect);
textEdits.appendChild(compSelect);
textEdits.appendChild(result);
//^^this is attaching the chunkOfStuff ELEMENT (which is a div that now includes some textContent)
//^^to the textEdits SELECTOR which is a hidden section that is placed inside the instructions div
//end div editing and understanding-----------------------------------------------------------------------------------------------

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     game();
//   });
// });