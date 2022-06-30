
const options = ["scissors", "paper", "stone"];

function random(number) {
  return Math.floor(Math.random()*number)
};  

function computerPlay() {
  
  return options[random(3)];
};

// const computerSelection = computerPlay();

let computerScore = 0;
let playerScore = 0;



function playRound(playerSelection, computerSelection) {

playerSelection = prompt("choose scissors, paper or stone.")
playerSelection = playerSelection.toLowerCase();
computerSelection = computerPlay(); 

  if (playerSelection === computerSelection) {
    console.log(`It's a draw. Both picked ${playerSelection}. No change to the score`)
    }
  else if ((playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="stone") || 
    (playerSelection==="stone" && computerSelection==="scissors")){
    playerScore = playerScore + 1
    console.log (`you won! Your ${playerSelection} beats their ${computerSelection}. Your score is ${playerScore}! Computer score is ${computerScore}.`) 
    }
  else {
    computerScore = computerScore + 1
    console.log (`too bad, you lost. Their ${computerSelection} beats your ${playerSelection}. Your score is ${playerScore}! Computer score is ${computerScore}.`)}
    };

function game() {
  for (let i = 0; i<5; i++) {
    playRound()};   
  
  if (playerScore === computerScore) {
      console.log("eh draw la sia. Your score is " + playerScore + "! Computer score is " + computerScore + ".")
      }
      else if (playerScore > computerScore) {
      console.log("woohoo you won! Your score is " + playerScore + "! Computer score is " + computerScore + ".")
      }
      else {console.log("nooo, you lost... Your score is " + playerScore + "! Computer score is " + computerScore + ".")
      };
   };

game();





/* function game() {
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

  // this is the final score message. take note that "=" made it set the variable and draw all the time, changing it to "===" works.
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

*/