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

//Add a div for displaying results and change all of your console.logs into DOM methods.
let humanScore = 0;
let computerScore = 0;
const round = 5;

function playRound(humanChoice, computerChoice) {
  const container = document.querySelector("#container");
  const para = document.createElement("p");
  const btnClear = document.querySelector("#btnClear");
  const result = document.createElement("p");

  if (humanChoice === computerChoice) {
    para.textContent = `Its a tie! You both chose ${humanChoice} and ${computerChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissor" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissor")
  ) {
    computerScore++;

    para.textContent = `You lose ${computerChoice} beats ${humanChoice}`;
  } else {
    humanScore++;
    para.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  }

  for (i = 0; i <= round; i++) {
    if (humanScore === 5) {
      result.textContent = `You won Human score is ${humanScore} and computed Score is ${computerScore} `;
      break;
    } else if (computerScore === 5) {
      result.textContent = `You lose computer score is ${computerScore} and yours is ${humanScore}`;
      break;
    }
  }

  btnClear.addEventListener("click", () => {
    para.textContent = "";
    result.textContent = "";
  });

  container.appendChild(para);
  container.appendChild(result);
}

//Display the running score, and announce a winner of the game once one player reaches 5 points.

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// const outcome = playRound(getHumanChoice, getComputerChoice);
// console.log(playRound);

//Old login using console log

// 1.For now, remove the logic that plays exactly five rounds.

// }
// playGame();
// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     console.log(
//       `Its a tie! You both chose ${humanChoice} and ${computerChoice}`,
//     );
//   } else if (
//     (humanChoice === "rock" && computerChoice === "paper") ||
//     (humanChoice === "scissor" && computerChoice === "rock") ||
//     (humanChoice === "paper" && computerChoice === "scissor")
//   ) {
//     // computerScore++;

//     console.log(`You lose ${computerChoice} beats ${humanChoice}`);
//   } else {
//     // humanScore++;
//     console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//   }
// }
