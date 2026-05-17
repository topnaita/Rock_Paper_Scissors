// This is the the first section of the code where the option is automatically selected by the system.
function getComputerChoice(compChoice) {
  if (compChoice == 0) {
    compChoice = "Rock";
  } else if (compChoice == 1) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissor";
  }

  return compChoice;
}

const pcAuto = (compChoice = Math.floor(Math.random() * 3)); // the function math.floor Always Rounds Down
console.log(getComputerChoice(pcAuto));

//This is the second section of the game where the user can manually select any option.
// human select

function getHumanChoice(hChoice) {
  let lowerInput = hChoice.toLowerCase();

  if (lowerInput === "rock") {
    lowerInput = "Rock";
  } else if (lowerInput === "paper") {
    hChoice = "Paper";
  } else if (lowerInput === "scissor") lowerInput = "Scissor";

  return lowerInput;
}

const message = prompt("Input Your Choice");
console.log(getHumanChoice(message));

// This is the third section to start comparing one outcome.

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    return console.log("You lose! Paper beats Rock");
  }
}

const humanSelection = getHumanChoice(message);
const computerSelection = getComputerChoice(pcAuto);
playRound(humanSelection, computerSelection);
