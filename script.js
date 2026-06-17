//Computer Choice
function getComputerChoice() {
  compChoice = Math.floor(Math.random() * 3); // this code round the random to back to near integer

  if (compChoice === 0) {
    compChoice = "rock";
  } else if (compChoice === 1) {
    compChoice = "paper";
  } else {
    compChoice = "scissor";
  }

  return compChoice;
}

// console.log(getComputerChoice());

//human choice

const getHumanChoice = () => {
  const hChose = prompt("Enter your Choice");
  let lowerInput = hChose.toLocaleLowerCase();
  return lowerInput;
};

// console.log(getHumanChoice());

//Game logic
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 5;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(
        `Its a tie! You both chose ${humanChoice} and ${computerChoice}`,
      );
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "scissor" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "scissor")
    ) {
      computerScore++;

      //console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    } else {
      humanScore++;
      //console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
  }

  for (i = 0; i <= round; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (humanScore === 3) {
      console.log(
        `You won Human score is ${humanScore} and computed Score is ${computerScore} `,
      );
    } else if (computerScore === 3) {
      console.log(
        `You lose computer score is ${computerScore} and yours is ${humanScore}`,
      );
    }
  }
}
playGame();
