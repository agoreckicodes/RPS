//call rock paper scissors command
//make function computerPlay which randomly returns R P or S
let computerScore = 0;
let playerScore = 0;
let userName = getName();

bestOfFive();

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
//make funciton playerSelection which takes user input to decide on RPS
function playerSelection(){
    playerMove = prompt("Choose: Rock, Paper, or Scissors");
    playerMove = playerMove.toLowerCase();
    if(playerMove != "rock" && playerMove != "paper" && playerMove != "scissors"){
        console.log("That is not a valid input. Please reply with rock, paper, or scissors.");
        playerSelection();
    }
    return playerMove;
}
function getName(){
    return prompt("What is your name?", "Andrew");
}
function printScore(){
    console.log("The score is ");
}
//make function that plays a game of RPS using computerPlay and playerSelection
function playGame(){
    let playerMove = playerSelection();
    let computerMove = computerPlay();
    console.log(`Computer played: ${computerMove}. ${userName} played: ${playerMove}`);
    if(playerMove === computerMove){
        console.log("It's a tie!");
    }else if(playerMove === "rock"){
        if(computerMove === "scissors"){
            console.log("You Win!");
            playerScore++;
        }else{
            console.log("You Lose.");
            computerScore++;
        }
    }else if(playerMove === "scissors"){
        if(computerMove === "paper"){
            console.log("You Win!");
            playerScore++;
        }else{
            console.log("You Lose.");
            computerScore++;
        }
    }else{
        if(computerMove === "rock"){
            console.log("You Win!");
            playerScore++;
        }else{
            console.log("You Lose.");
            computerScore++;
        }
    }
}

function bestOfFive(){
    let gameOn = true;
   
   
    while(gameOn){
        playGame();
        if(computerScore === 3){
            console.log(`You lost ${computerScore} to ${playerScore}`);
            gameOn = false;
        } else if(playerScore === 3){
            console.log(`You won ${playerScore} to ${computerScore}`);
            gameOn = false;
        }else{
            printScore();
        }
    }
    playAgain();
}
function playAgain(){
    resetScore();
    let response = prompt("Play again?");
    if(response.toLowerCase() === "yes"){
        bestOfFive();
    }else{
        console.log("Thanks for playing!");
    }
}
function resetScore(){
    computerScore = 0;
    playerScore = 0;
}
function printScore(){
    console.log(`The score is ${userName}:${playerScore} to Computer:${computerScore}`);
}
//make function game() that pays five rounds (best 3 of five)