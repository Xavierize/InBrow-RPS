    function playRound(playerSelection, computerSelection) {
    // Rock Paper Scissors game logic
    if (playerSelection === computerSelection) {
      return "It's a tie! :/";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win! :D";
    } else {
      return "You lose! :(";
    }
  }

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function selectRock() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    showResult(playRound(playerSelection, computerSelection));
  }

  function selectPaper() {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    showResult(playRound(playerSelection, computerSelection));
  }

  function selectScissors() {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    showResult(playRound(playerSelection, computerSelection));
  }

  function showResult(result) {
    const winnerDiv = document.querySelector(".winner");
    winnerDiv.textContent = result;
  }
