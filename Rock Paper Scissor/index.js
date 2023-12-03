const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice, computerChoice, result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    let result = getResult()
    resultDisplay.innerHTML = result
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    //console.log(randomNumber)

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if(randomNumber == 2) {
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        return'It\'s is a draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') { //user won 
        return'You won!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        return'You won!'
    }
    if(computerChoice === 'scissors' && userChoice == 'rock') {
        return'You won!'
    }

    return 'You Lost!'
}

