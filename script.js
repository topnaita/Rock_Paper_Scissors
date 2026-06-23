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

//Player choice.
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
};

getHumanChoice();

// I declared three counter variable outside of the function.
let humanScore = 0;
let computerScore = 0;
const round = 5;

//Game logic. See below

function playRound(humanChoice, computerChoice) {
  const container = document.querySelector("#container");
  const para = document.createElement("p");
  const btnClear = document.querySelector("#btnClear");
  const result = document.createElement("p");
  const playerScore = document.querySelector("#playerScore");
  const machineScore = document.querySelector("#machineScore");

  if (humanScore === 5 || computerScore === 5) {
    // This code prevent from continuing the game after we have a winner!.
    return false;
  }

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
      result.textContent = `You won Human score is ${humanScore} and computed Score is ${computerScore}`;
    } else if (computerScore === 5) {
      result.textContent = `You lose computer score is ${computerScore} and yours is ${humanScore}`;
    }
  }

  playerScore.textContent = `Player Score = ${humanScore}`; // It shows the current amount of winning games by the player.
  machineScore.textContent = `Computer Score = ${computerScore}`; // It shows the current amount of winning games by the Computer.

  btnClear.addEventListener("click", () => {
    //This eventLis, clear text and reset counter variable we can star over the game.
    para.textContent = "";
    result.textContent = "";
    counterScoreHuman.textContent = "";
    humanScore = 0;
    computerScore = 0;
  });

  container.appendChild(para);
  container.appendChild(result);
}
