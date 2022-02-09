
// 

const options = ["scissors", "paper", "stone"];

function random(number) {
  return Math.floor(Math.random()*number)
};  

function computerPlay() {
  
  return options[random(3)];
};

const computerSelection = computerPlay();

let playerPlay = window.prompt("choose scissors, paper or stone.");
console.log("You chose " + playerPlay);
console.log ("Computer chose " + computerSelection);
let playerSelection = playerPlay.toLowerCase();

function playRound() {
if (playerSelection === computerSelection) {
  console.log("It's a draw. ")
}
else if ((playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="stone") || (playerSelection==="stone" && computerSelection==="scissors")){
  console.log ("you won!")
}
else {console.log ("too bad, you lost.")}
};
playRound();