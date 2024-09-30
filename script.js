let humanScore = 0;
let computerScore = 0;

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

let getComputerChoice = () => {
    let choice = getRandomInt(3);
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    return "scissors";
};

let getHumanChoice = () => {
    let choice = document.getElementById("humanChoice").value.toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        alert("Please enter a valid choice: rock, paper, or scissors.");
        return null;
    }
};

let playRound = (humanChoice, computerChoice) => {
    if (!humanChoice) return;  

    let resultMessage = "";
    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = "You win!";
        humanScore += 1;
    } else {
        resultMessage = "You lose!";
        computerScore += 1;
    }

    document.getElementById("result").innerText = resultMessage;
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
};

let playGame = () => {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
};
