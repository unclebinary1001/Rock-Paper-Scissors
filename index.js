let score = 0;
let turns = 0;

const  buttons = document.querySelectorAll('.option');
const response = document.querySelector('#results');
const message = document.querySelector('#msg');

response.textContent = '';
message.textContent = '';
buttons.forEach(button => button.addEventListener('click', playerChoice));

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

getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * 3);
    return choices[selection];
}

function playerChoice(e) {
    response.textContent = '';
    let playerSelection = e.target.id;
    let result = playRound(playerSelection, getComputerChoice());
    ++turns;
    message.textContent = result;
    if (result.includes("win"))
        ++score;
    if (turns == 5) {
        let winner = (score==turns)? "You win": "Sorry you lose, Computer Wins\n";
        message.textContent = '';
        response.textContent = `${winner} Heres your score: ${score}`;
        score = 0;
        turns = 0;
    };
};