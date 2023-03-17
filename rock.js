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

function getResultOf(playerSelection=getPlayerSelection(),computerChoice=getComputerChoice()) {
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


function displayCurrent(result,playerChoice,computerChoice) {
    let text;
    if (result === 0) {text = `It's a draw, both ${computerChoice}`}  
    else if (result === 1 ) {
        text= `You win, ${playerChoice} beats ${computerChoice}`
        playerScore++;
    }
    else if (result === -1 ) {
        text = `You lose, ${computerChoice} beats ${playerChoice}`
        computerScore++;
    }
    text += `\n The score is \n player:${playerScore} - computer:${computerScore} `

    if (playerScore=== 5 || computerScore=== 5) {
        text += `\n Game over \n `
        text+= getWinner(playerScore,computerScore)
        document.querySelector(".container").remove()
    }
    return text;
}

function getWinner(playerScore,computerScore) {
    if (playerScore > computerScore) return "Congratulations! you have won"
    else {return "The computer have won"}
}

function addListeners(button) {
    button.addEventListener("click",() =>{
        let playerChoice=button.textContent.toLowerCase();
        let computerChoice= getComputerChoice();
        let result= getResultOf(playerChoice,computerChoice);
        console.log(result)
        display.textContent=displayCurrent(result,playerChoice,computerChoice)
        })

}

const buttons = document.querySelectorAll("button");
const display=document.querySelector("#display");
let playerScore=0;
let computerScore=0; 
buttons.forEach(addListeners);
