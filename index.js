//RPS
const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const finalResult = document.getElementById("finalResult");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    // Check if the game is already over
    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)]; //random index from 0 to 2 --> randomly from rock to scissors
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText"); //reset the class list for colors
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        resultDisplay.textContent = "GAME OVER";
        disableButtons();
        
        // Set the final result based on who reached 5 first
        if (playerScore >= 5) {
            finalResult.textContent = "WINNER: PLAYER";
        } else if (computerScore >= 5) {
            finalResult.textContent = "WINNER: COMPUTER";
        }
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('button'); // Adjust the selector to target your game buttons
    buttons.forEach(button => {
        button.disabled = true;
    });
}

