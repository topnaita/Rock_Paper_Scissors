// This is the the first section of the code where the option is automatically selected by the system.
function getComputerChoice() {
  let compInput = Math.floor(Math.random() * 3); // the function math.floor Always Rounds Down
  if (compInput == 0) {
    compInput = "Rock";
  } else if (compInput == 1) {
    compInput = "Paper";
  } else {
    compInput = "Scissor";
  }

  return compInput;
}
console.log(getComputerChoice());

//This is the second section of the game where the user can manually select any option.
// human select

function getHumanChoice(hChoice) {
  let strInd = hChoice.charAt(0);
  let capitalized = strInd.toUpperCase();
  let restOfString = hChoice.slice(1).toLowerCase();

  return capitalized + restOfString;
}

const message = prompt("Input Your Choice");
console.log(getHumanChoice(message));
