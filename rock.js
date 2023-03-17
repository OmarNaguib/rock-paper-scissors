function getWinner(playerScore,computerScore) {
    if (playerScore > computerScore) return "you win"
    else {return "The computer wins"}
}


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
        text+= getWinner(playerChoice,computerChoice)
    }
    return text;
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


// function game() {
//     let computerScore=0;
//     let playerScore=0;
//     for (let i=0;i<5;i++) {
//         // get choices and play a round
//         let computer = getComputerChoice()
//         let player = getPlayerSelection()
//         let result=playRound(player,computer)



//         if (result === 0) {console.log(`It's a draw, both ${computer}`)}
//         else if (result === 1 ) {
//             console.log(`You win, ${player} beats ${computer}`)
//             playerScore++;
//         }
//         else if (result === -1 ) {
//             console.log(`You lose, ${computer} beats ${player}`)
//             computerScore++;
//         }
//         console.log(`The score is Player: ${playerScore} Computer: ${computerScore}`)
//     }
// }

// game()
// result=playRound();
// console.log(result)