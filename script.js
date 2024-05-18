// Write a function that returns a random string from array
// possible outcomes -> (rock, paper or scissors)
function getComputerChoice() {
    // Create an array with three possible outcomes
    const possibleOutcomes = ["Rock", "Paper", "Scissors"];
    // Select a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // Select a random choice from an array
    let randomChoice = possibleOutcomes[randomNumber]
    // Return randomly chosen outcome
    return(randomChoice)
}
