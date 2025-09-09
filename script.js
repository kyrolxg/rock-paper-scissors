// intialized the score variables globally
let humanScore = 0; 
let computerScore = 0;

// randomly generates a choice for the "computer"
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (randomNum === 0) computerChoice = "rock";
    else if(randomNum === 1) computerChoice = "paper";
    else computerChoice = "scissors";

    return computerChoice;
}

// takes in user input using the prompt window
function getHumanChoice(){
    let humanChoice = window.prompt("Enter your choice broski");

    return humanChoice;
}

// function which simulates a single round
function playRound(humanChoice, computerChoice, roundNum){
    console.log(`Round ${roundNum}`);
    humanChoice = humanChoice.toLowerCase();

    if(
        (humanChoice === "rock"&&computerChoice === "scissors") || 
        (humanChoice === "paper"&&computerChoice === "rock") ||
        (humanChoice === "scissors"&&computerChoice === "paper")
    ){
        console.log(`You threw a ${humanChoice}\nComputer there a ${computerChoice}\n`);
        console.log("Yayy you win this one\n");
        humanScore++;
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        console.log(`You threw a ${humanChoice}\nComputer there a ${computerChoice}\n`);
        console.log("Ha lol you lost this one\n");
        computerScore++;
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }

    else{
        console.log("Bruh it is a tie.");
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }
}

// function which plays the game for 5 rounds
function playGame(){
    for(let i = 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, i+1);
        console.log();
    }

    if(humanScore > computerScore){
        console.log("Damn you actually beat the computer");
    }
    else{
        console.log("LOLOLOL you lost against the computer")
    }
}

playGame();