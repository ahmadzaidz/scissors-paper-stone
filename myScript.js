
const options = ["scissors", "paper", "stone"];

function random(number) {
  return Math.floor(Math.random()*number)
};  

function computerPlay() {
  
  return options[random(3)];
};

const computerSelection = computerPlay();

let computerScore = 0;
let playerScore = 0;

function game() {
  function playRound() {
  // this prompts player selection
    let playerPlay = prompt("choose scissors, paper or stone.");
    const playerSelection = playerPlay.toLowerCase();
    computerPlay();
    console.log("You chose " + playerSelection);
    console.log ("Computer chose " + computerSelection);
  
    // this gives the result
    if (playerSelection === computerSelection) {
      console.log("It's a draw. No change to the score")
      }
    else if ((playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="stone") || 
      (playerSelection==="stone" && computerSelection==="scissors")){
      playerScore = playerScore + 1
      console.log ("you won! Your score is " + playerScore + "! Computer score is " + computerScore + ".") 
      }
    else {
      computerScore = computerScore + 1
      console.log ("too bad, you lost. Your score is " + playerScore + "! Computer score is " + computerScore + ".")}
      };
  // this is the loop to play 5 rounds
    for (let i = 0; i<5; i++) {
    playRound()};   

  // this is the final score message
    if (playerScore === computerScore) {
    console.log("eh draw la sia. Your score is " + playerScore + "! Computer score is " + computerScore + ".")
    }
    else if (playerScore > computerScore) {
    console.log("woohoo you won! Your score is " + playerScore + "! Computer score is " + computerScore + ".")
    }
    else {console.log("nooo, you lost... Your score is " + playerScore + "! Computer score is " + computerScore + ".")};
    };

//this plays the game 
game();

