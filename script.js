/*
START Game

Get a random choice from the computer like
    - rock, paper or scissors

Prompt the user to enter a valid choice like
    - rock, paper or scissors

Declare the players' scores and initialize them to 0 using variables like
    - humanScore, computerScore

Write a function called playRound

Declare two parameters for the playRound function called humanChoice and
    computerChoice to take the human and computer choices as arguments

Make the humanChoice parameter case-insensitive

Write code for the playRound function to console.log the round winner

Increment humanScore or computerScore based on the round winner

Write a function called playGame

Move the playRound function and score variables into the playGame function
    so they are in the same scope

Call playRound five times

After 5 rounds:
    Compare humanScore and computerScore
    If humanScore is higher, human wins
    If computerScore is higher, computer wins
    If the scores are equal, the game is a tie

END Game
*/

function getComputerChoice(){
    let ranNum = Math.random()
    if ( ranNum <= 0.333) {
        return "rock";
    } else if ( ranNum > 0.333 && ranNum < 0.666){
        return "paper";
    } else {
        return "scissors";
    }

}







function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissors");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock")
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats paper");
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    }
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());

    
    let rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());

})
    let paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
})
    let scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
    })
}

playGame();

