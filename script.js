// intialized the score variables globally
let humanScore = 0; 
let computerScore = 0;
let gameEnd = false;

// dom elements
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper");
const resultsDiv = document.querySelector("#results");

// randomly generates a choice for the "computer"
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (randomNum === 0) computerChoice = "rock";
    else if(randomNum === 1) computerChoice = "paper";
    else computerChoice = "scissors";

    return computerChoice;
}

// function which simulates a single round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    let message = "";

    if(humanChoice === computerChoice){
        message = `Welp, it is a TIE. You both chose ${humanChoice} ._.`;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        message = `YOU WIN! ${humanChoice} absolutely destroys ${computerChoice}`;
    }

    else{
        computerScore++;
        message = `Imagine LOSING to a computer... ${computerChoice} absolutely destroys ${humanChoice}`;
    }

    return {
        message,
        humanScore,
        computerScore
    };
}

// helper function to update UI
function updateUI(message, humanScore, computerScore) {
    resultsDiv.textContent = "";

    const messageP = document.createElement("p");
    messageP.textContent = message;

    const scoreP = document.createElement("p");
    scoreP.textContent = `Score -> YOU: ${humanScore} || COMPUTER: ${computerScore}`;

    resultsDiv.appendChild(messageP);
    resultsDiv.appendChild(scoreP);
}

function checkGameEnd() {
    if (humanScore === 5) {
        resultsDiv.textContent = "GAME OVER -> YOU WIN, GG";
        disableButtons();
        gameEnd = true;
    }

    else if (computerScore === 5) {
        resultsDiv.textContent = "GAME OVER -> COMPUTER WINS, LOLLLL"
        disableButtons();
        gameEnd = true;
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

}

// eventListeners
rockBtn.addEventListener("click", () => {
    if(gameEnd) return;
    const result = playRound("Rock", getComputerChoice());
    updateUI(result.message, result.humanScore, result.computerScore);
    checkGameEnd();
});

scissorsBtn.addEventListener("click", () => {
    if(gameEnd) return;
    const result = playRound("Scissors", getComputerChoice());
    updateUI(result.message, result.humanScore, result.computerScore);
    checkGameEnd();
});

paperBtn.addEventListener("click", () => {
    if(gameEnd) return;
    const result = playRound("Paper", getComputerChoice());
    updateUI(result.message, result.humanScore, result.computerScore);
    checkGameEnd();
});
