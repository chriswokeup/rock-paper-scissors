function playGame() {
// Declare players score variables
// Initialize variables with the value of 0
let humanScore = 0;
let computerScore = 0;

// Write a function that returns a random string from array
// possible outcomes -> (rock, paper or scissors)
function getComputerChoice() {
    // Create an array with three possible outcomes
    const possibleOutcomes = ["Rock", "Paper", "Scissors"];
    // Select a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // Select a random choice from an array
    let randomChoice = possibleOutcomes[randomNumber];
    // Return randomly chosen outcome
    return randomChoice;
}

// Write a logic to get human choice
// Create a function to get human choice
function getHumanChoice() {
    // Ask for a prompt to receive human choice
    let humanChoice = prompt("Rock, Paper or Scissors?");
    // Return selected choice
    return humanChoice;
}
// Write the logic to play a single round
// Define two parameters for playRound: humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    // Make human and computer choice case insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    // Write an if code representing the round winner
    // If choice is the same, we have a draw.
    if (humanChoice === computerChoice) {
        console.log("It's a draw.")
        // If human chose rock and computer chose paper, computer wins
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        console.log("Computer wins! Paper beats Rock");
        // If human chose rock and computer chose scissors, human wins
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors");
        // If human chose scissors and computer chose rock, computer wins
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("Computer wins! Rock beats Scissors");
        // If human chose scissors and computer chose paper, human wins
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats Paper");
        // If human chose paper and computer chose rock, human wins
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock");
    }     // If human chose paper and computer chose scissors, computer wins
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        console.log("Computer wins! Scissors beats Paper");
    }
}

// Create a for loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Ask for a human prompt and computer choice
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // Play round
        playRound(humanSelection, computerSelection);
        console.log("Current Score: Computer: " + computerScore + " Player: " + humanScore);
    }
}

playGame();