/*
START Game

Generate a random computer choice:
    - rock, paper, or scissors

Initialize the human and computer scores to 0

Set up a function to play one round

When the player clicks Rock, Paper, or Scissors:
    - Use the clicked button as the human choice
    - Generate a computer choice
    - Play one round

For each round:
    - Compare the human choice and computer choice
    - Display the result on the webpage
    - Increase the winner's score
    - Display the current score

After each round:
    - Check if the human reached 5 points
    - Check if the computer reached 5 points
    - Announce the winner when someone reaches 5

Once someone reaches 5 points:
    - Stop any additional rounds

END Game
*/

function getComputerChoice() {
    let ranNum = Math.random();

    if (ranNum <= 0.333) {
        return "rock";
    } else if (ranNum > 0.333 && ranNum < 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanScore === 5 || computerScore === 5) {
            return;
        }

        if (humanChoice === computerChoice) {
            const msg1 = document.createElement("div");
            msg1.textContent = "Its a tie!";
            document.body.appendChild(msg1);

        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            const msg2 = document.createElement("div");
            msg2.textContent = "You win! rock beats scissors";
            document.body.appendChild(msg2);
            humanScore++;

        } else if (humanChoice === "paper" && computerChoice === "rock") {
            const msg3 = document.createElement("div");
            msg3.textContent = "You win! paper beats rock";
            document.body.appendChild(msg3);
            humanScore++;

        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            const msg4 = document.createElement("div");
            msg4.textContent = "You win! scissors beats paper";
            document.body.appendChild(msg4);
            humanScore++;

        } else {
            const msg5 = document.createElement("div");
            msg5.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            document.body.appendChild(msg5);
            computerScore++;
        }

        if (humanScore === 5) {
            const winMsg = document.createElement("div");
            winMsg.textContent = "You win!";
            document.body.appendChild(winMsg);

        } else if (computerScore === 5) {
            const loseMsg = document.createElement("div");
            loseMsg.textContent = "You lose! Computer wins!";
            document.body.appendChild(loseMsg);
        }

        const liveScore = document.createElement("div");
        liveScore.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
        document.body.appendChild(liveScore);
    }

    let rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    let paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    let scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();