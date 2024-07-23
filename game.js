// Initialize scores
let userScore = 0;
let computerScore = 0;
let playMore = true;
// Choices array for computer selection
const choices = ['rock', 'paper', 'scissors'];
while (playMore) {
    // Get user's choice
    let userChoice = prompt("Enter choice you want \t 1.rock \t2.paper \t3.scissors:");

    // Handle case where user enters nothing or cancels the prompt
    if (userChoice === null || userChoice.trim() === '') {
        userChoice = 'null';
    } else {
        userChoice = userChoice.trim().toLowerCase();
    }

    // Validate user's choice
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' && userChoice !== 'null') {
        alert("Invalid input. Please enter rock, paper, or scissors.");
        continue; // Continue to the next iteration of the loop to ask again
    }
    // Get computer's choice
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    // Determine the winner
    let resultMessage;
    if (userChoice === computerChoice) {
        resultMessage = "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultMessage = "You win this round!";
        userScore++;
    } else if (userChoice === 'null') {
        resultMessage = "You entered nothing!";
        // No score update if the user entered nothing
    } else {
        resultMessage = "You lose this round!";
        computerScore++;
    }
    // Show result of the round
    alert(`You chose ${userChoice}, computer chose ${computerChoice}.\n${resultMessage}`);
    // Show scores
    alert(`Scores:\nUser Score is: ${userScore}\nComputer Score is: ${computerScore}`);
    // Ask if user wants to play another round
    let playMoreChoice = prompt("Do you want to play another round? \n yes or no");
    if (playMoreChoice !== "yes") {
        playMore = false;
    }
}
// Show final scores
alert(`Final scores:\nUser Score is: ${userScore}\nComputer Score is: ${computerScore}`);
