function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) { return "rock"}
    else if (computerChoice === 1) { return "paper"}
    else if (computerChoice === 2) { return "scissors"}
}

function getPlayerSelection() {
    let playerSelection = prompt("Make your choice").toLowerCase()
    return playerSelection
}

function playRound(playerSelection=getPlayerSelection(),computerChoice=getComputerChoice()) {
    if (playerSelection === "rock") { 

        if (playerSelection === computerChoice) {return "It's a Draw, both Rocks"}
        else if (computerChoice === "scissors") {return "You win! Rock beats Scissors"}
        else if (computerChoice === "paper") {return "You Lose! Paper beats Rock"}
       }
    else if (playerSelection === "paper") {  

        if (playerSelection === computerChoice) {return "It's a Draw, Both Papers"}
        else if (computerChoice === "scissors") {return "You Lose! Scissors beats Paper"}
        else if (computerChoice === "rock") {return "You Win! Paper beats Rock"}

      }
    else if (playerSelection === "scissors") {  

        if (playerSelection === computerChoice) {return "It's a Draw, Both Scissors"}
        else if (computerChoice === "paper") {return "You Win! Scissors beats Paper"}
        else if (computerChoice === "rock") {return "You Lose! Rock beats Scissors"}

      }
    else  { return "invalid input" }


}


result=playRound();
console.log(result)