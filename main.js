const computerPlay = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const computerSelection = computerPlay();

for (let i = 0; i < 5; i++) {
  const playerSelection = prompt("Rock, Paper or Scissors ?");
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a draw !!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (
      playerSelection === "Paper" &&
      computerSelection === "Scissors"
    ) {
      return "You Lose! Scissors beats Paper";
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      return "You Win! Scissors beats Paper";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "Error, Please enter the right words";
    }
  }

  alert(playRound(playerSelection, computerSelection));
}
