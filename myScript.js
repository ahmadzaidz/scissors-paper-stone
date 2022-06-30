
// 

const options = ["scissors", "paper", "stone"];
let computerScore = 0;
let playerScore = 0;

function random(number) {
  return Math.floor(Math.random()*number)
};  

function computerPlay() {
  
  return options[random(3)];
};

const computerSelection = computerPlay();

let playerPlay = window.prompt("choose scissors, paper or stone.");
const playerSelection = playerPlay.toLowerCase();
console.log("You chose " + playerSelection);
console.log ("Computer chose " + computerSelection);


function playRound() {
if (playerSelection === computerSelection) {
  console.log("It's a draw. No change to the score")
}
else if ((playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="stone") || 
(playerSelection==="stone" && computerSelection==="scissors")){
  return playerScore++;
  console.log ("you won! Your score is " + playerScore + "! Computer score is " + computerScore) 
}
else {
  return computerScore++;
  console.log ("too bad, you lost. Your score is " + playerScore + "! Computer score is " + computerScore)}
};

playRound();

