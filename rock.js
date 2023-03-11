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
        // get choices and play a round
        let computer = getComputerChoice()
        let player = getPlayerSelection()
        let result=playRound(player,computer)

        if (result === 0) {console.log(`It's a draw, both ${computer}`)}
        else if (result === 1 ) {console.log(`You win, ${player} beats ${computer}`)}
        else if (result === -1 ) {console.log(`You lose, ${computer} beats ${player}`)}
    }
}

game()
// result=playRound();
// console.log(result)