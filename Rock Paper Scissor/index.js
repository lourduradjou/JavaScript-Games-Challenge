// we have to first take the choices in some variables
//then add the listener to the buttons first get the buttons
//function trigger () -> check which button
//user clicked and call the random function of js
//and compare the user choice with computer choice
//and call the display result function

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const userChoices = document.querySelectorAll('button');
let userChoice, computerChoice, result;

userChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    //fucntion to generate computer choice
    generateComputerChoice();
    let result = getResult();
    resultDisplay.innerHTML = result;
}))

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * userChoices.length) + 1;

    if (randomNumber === 1)
        computerChoice = 'rock';
    else if (randomNumber === 2) 
        computerChoice = 'paper';
    else   
        computerChoice = 'scissors';

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (userChoice === computerChoice)
        return 'It\'s is Tie\n';

    if (computerChoice === 'rock' && userChoice === 'paper')
        return 'User Won\n';
    if (computerChoice === 'paper' && userChoice === 'scissors')
        return 'User Won\n';
    if (computerChoice === 'scissors' && userChoice === 'rock')
        return 'User Won\n';

    return "Computer won , You Lost!";
}