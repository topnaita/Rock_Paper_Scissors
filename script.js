/* This is the the first section of the code where the option 
is automatically selected by the system.*/

function getComputerChoice() {
  compChoice = Math.floor(Math.random() * 3); // this code round the random to back to near integer

  if (compChoice === 0) {
    compChoice = "Rock";
  } else if (compChoice === 1) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissor";
  }

  return compChoice;
}

// console.log(getComputerChoice());

//This is the second section of the code where the user must select an option.

function getHumanChoice() {
  let hChoice = prompt("Input Your Choice");
  let lowerInput = hChoice.toLowerCase();

  if (lowerInput === "rock") {
    lowerInput = "Rock";
  } else if (lowerInput === "paper") {
    lowerInput = "Paper";
  } else if (lowerInput === "scissor") {
    lowerInput = "Scissor";
  }
  return lowerInput;
}

// console.log(getHumanChoice());

//This is the third section to start comparing one outcome of the previous functions.

function playGame() {
  const callPlayRound = playRound();

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "Rock" && computerChoice === "Paper") ||
      (humanChoice === "Scissor" && computerChoice === "Rock") ||
      (humanChoice === "Paper" && computerChoice === "Scissor")
    ) {
      computerScore++;
      return "You lose!";
    } else {
      humanScore++;
      return "You win!";
    }
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
