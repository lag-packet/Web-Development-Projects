const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', 
    (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        resultDisplay.classList.add('fade-in');
        resultDisplay.innerHTML = getResult();

        setTimeout(() => {
            resultDisplay.classList.remove('fade-in');

            setTimeout(() => {
                resultDisplay.classList.add('fade-in');
            }, 50); // samll delay
        }, 1000); // 1 sec
    }));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } 
    else if (randomNumber === 2) {
        computerChoice = 'scissors';
    } 
    else {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!';
    }
    else if (computerChoice == 'rock' && userChoice == 'paper') {
        result = "You win!";
    }
    else if (computerChoice == 'rock' && userChoice == 'scissors') {
        result = "You lose.";
    }
    else if (computerChoice == 'paper' && userChoice == 'scissors') {
        result = "You win!";
    }
    else if (computerChoice == 'paper' && userChoice == 'rock') {
        result = "You lose.";
    }
    else if (computerChoice == 'scissors' && userChoice == 'rock') {
        result = "You win!";
    }
    else if (computerChoice == 'scissors' && userChoice == 'paper') {
        result = "You lose.";
    }
    return result;
}