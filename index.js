console.log("I am working")

getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * 3);
    return choices[selection];
}

playRound = (playerSelection, computerSelection) => {
    if (
        playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"
        || 
        playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"
        || 
        playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"
        )
        return "You win!"; 

    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) 
        return "It's a tie. Play again!";
        
    else 
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

game = () => {
    let score = 0
    for (let i = 0; i < 5; i++) {
        //TODO: Start from step 6 part 3
    }
}