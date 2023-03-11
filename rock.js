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

        if (playerSelection === computerChoice) {return 0}
        else if (computerChoice === "scissors") {return 1}
        else if (computerChoice === "paper") {return -1}
       }
    else if (playerSelection === "paper") {  

        if (playerSelection === computerChoice) {return 0}
        else if (computerChoice === "scissors") {return -1}
        else if (computerChoice === "rock") {return 1}

      }
    else if (playerSelection === "scissors") {  

        if (playerSelection === computerChoice) {return 0}
        else if (computerChoice === "paper") {return 1}
        else if (computerChoice === "rock") {return -1}

      }
    else  { return "invalid input" }


}

function game() {
    for (let i=0;i<5;i++) {
        computer = getComputerChoice()
        player = getPlayerSelection()
        result=playRound()
    }
}


result=playRound();
console.log(result)