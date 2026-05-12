// This is the the first section of the code where the option is automatically selected by the system.
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3); // the function math.floor Always Rounds Down
  if (num == 0) {
    num = "Rock";
  } else if (num == 1) {
    num = "Paper";
  } else {
    num = "Scissor";
  }

  return num;
}
console.log(getComputerChoice());

//This is the second section of the game where the user can manually select any option.
let hSelect = prompt("Type a number", "");
function getHumanChoice() {
  if (hSelect === "1") {
    hSelect = "Rock";
  } else if (hSelect === "2") {
    hSelect = "Paper";
  } else {
    hSelect = "Scissor";
  }
  return hSelect;
}
console.log(getHumanChoice());
