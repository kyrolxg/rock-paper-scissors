
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (randomNum === 0) computerChoice = "rock";
    else if(randomNum === 1) computerChoice = "paper";
    else computerChoice = "scissors";
    // console.log(computerChoice);

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = window.prompt("Enter your choice broski");

    // console.log(humanChoice);
    return humanChoice;
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    // console.log(humanChoice);

    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You threw a ${humanChoice}\nComputer there a ${computerChoice}\n`);
        console.log("Yayy you win this one\n");
        humanScore++;
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }

    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You threw a ${humanChoice}\nComputer there a ${computerChoice}\n`);
        console.log("Ha lol you lost this one\n");
        computerScore++;
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);

    }

    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You threw a ${humanChoice}\nComputer there a ${computerChoice}\n`);
        console.log("Yayy you win this one\n");
        computerScore++;
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }

    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log(`You threw a ${humanChoice}\nComputer there a ${computerChoice}\n`);
        console.log("Ha lol you lost this one\n");
        computerScore++;
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }

    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You threw a ${humanChoice}\nComputer there a ${computerChoice}\n`);
        console.log("Yayy you win this one\n");
        computerScore++;
        console.log(`-------Current Scores-------\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }

    else if (humanChoice === "scissors" && computerChoice === "rock"){
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

playRound(humanChoice, computerChoice);