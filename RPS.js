console.log("Hello World");
// Setting up functionality for the game
window.computerScore = 0;
window.tie = 0;
let playerSelection = "";
let result = "";

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let status = '';
    let winner = '';
    let loser = '';
    
    //If the player chooses rock 
    if (player === 'rock' && computerSelection === 'paper') {
        status = 'Lose :(';
        winner = 'Paper';
        loser = 'Rock';
        ComputerScore++;

        function selectRock(e) {
            playerSelection = 'rock';
            //console.log('Rock!')
            game();
    }

    function selectRock(e) {
        playerSelection = 'rock';
        //console.log('Rock!')
        game();
}