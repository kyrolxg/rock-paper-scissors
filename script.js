function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (randomNum === 0) computerChoice = "rock";
    else if(randomNum === 1) computerChoice = "paper";
    else computerChoice = "scissors";
    console.log(computerChoice);

    return computerChoice;
}
