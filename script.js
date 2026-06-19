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

/* Create three buttons, one for each selection. Add an event listener to the buttons 
 that call your playRound function with the correct playerSelection every time a 
 button is clicked. (you can keep the console.logs for this step)*/

//human choice
const getHumanChoice = () => {
  const btnRock = document.querySelector("#rock");
  const btnPaper = document.querySelector("#paper");
  const btnScissor = document.querySelector("#scissor");

  btnRock.addEventListener("click", () =>
    playRound("rock", getComputerChoice()),
  );
  btnPaper.addEventListener("click", () =>
    playRound("paper", getComputerChoice()),
  );
  btnScissor.addEventListener("click", () =>
    playRound("scissor", getComputerChoice()),
  );

  // Switch human selection to arrow function
  // const hChose = prompt("Enter your Choice");
  // let lowerInput = hChose.toLocaleLowerCase();
  // return lowerInput;
};
getHumanChoice();
//Game logic
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   let round = 5;

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
    // computerScore++;

    console.log(`You lose ${computerChoice} beats ${humanChoice}`);
  } else {
    // humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// const outcome = playRound(getHumanChoice, getComputerChoice);
// console.log(playRound);

// 1.For now, remove the logic that plays exactly five rounds.

// for (i = 0; i <= round; i++) {
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);
//   if (humanScore === 3) {
//     console.log(
//       `You won Human score is ${humanScore} and computed Score is ${computerScore} `,
//     );
//   } else if (computerScore === 3) {
//     console.log(
//       `You lose computer score is ${computerScore} and yours is ${humanScore}`,
//     );
//   }
// }
// }
// playGame();
