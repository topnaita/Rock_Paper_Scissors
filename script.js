function getComputerChoice(game) {
  let num = Math.floor(Math.random() * 3); // the function math.floor Always Rounds Down
  if (num == 0) {
    num = "Rock";
  } else if (num == 1) {
    num = "paper";
  } else {
    num = "Scissor";
  }

  return num;
}
console.log(getComputerChoice());
