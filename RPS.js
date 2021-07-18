//call rock paper scissors command
//make function computerPlay which randomly returns R P or S
let computerScore = 0;
let playerScore = 0;
let userName = "Andrew";
let result = '';
const buttons = document.querySelectorAll('.btn');
const score = document.querySelector('.score');
const winnerText = document.querySelector('.winnerText');
const textOutput = document.querySelector('.textOutput');


function computerPlay(){
    let randInt = Math.random() * 3;
    let compPlay;
    if(randInt <1){
        compPlay = "rock";
    }else if(randInt<2){
        compPlay = "paper";
    }else{
        compPlay = "scissors";
    }
    return compPlay;
}

function playGame(playerMove, computerMove){
    resetWinnerText();
    if(playerMove === computerMove){
        result = "It's a tie!";
    }else if(playerMove === "rock"){
        if(computerMove === "scissors"){
            result = "You Win!";
            playerScore++;
        }else{
            result = "You Lose.";
            computerScore++;
        }
    }else if(playerMove === "scissors"){
        if(computerMove === "paper"){
            result = "You Win!";
            playerScore++;
        }else{
            result = "You Lose.";
            computerScore++;
        }
    }else{
        if(computerMove === "rock"){
            result = "You Win!";
            playerScore++;
        }else{
            result = "You Lose.";
            computerScore++;
        }
    }
    updateTextOutput(computerMove, playerMove);
    score.textContent = `${userName}: ${playerScore} Computer: ${computerScore}`;
    announceWinner();
}

function resetScore(){
    computerScore = 0;
    playerScore = 0;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id, computerPlay());
    })
});

function announceWinner(){
    if (playerScore === 3){
        winnerText.textContent = "You won best of five!";
        resetScore();
    } else if (computerScore === 3){
        winnerText.textContent = "You lost best of five.";  
        resetScore();
    }
}
function updateTextOutput(computerMove, playerMove){
    textOutput.textContent = `${userName} played: ${playerMove}. Computer played: ${computerMove}. ${result}`;
}
function resetWinnerText(){
    winnerText.textContent = "";
}