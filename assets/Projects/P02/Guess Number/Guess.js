// Variables & Constant //

let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById('textOutput');
let userNumberUpdate = document.getElementById('inputBox');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "flex";
};

//Reload Page//

const newGameBegin = () => {
    window.location.reload();
};

//Start New Game//

const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute('disabled', true);
    userNumberUpdate.style.display = 'none';
};

// Main Logic //
const compareGuess = () => {
    const userNumber = Number(document.getElementById('inputBox').value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // Check guess is high or low//
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is High!";
            userNumberUpdate.value = "";
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is Low!";
            userNumberUpdate.value = "";
        }
        else {
            userGuessUpdate.innerHTML = "Wow! its Correct..";
            userNumberUpdate.value = "";
            startNewGame();
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!<br> Better Luck Next Time!<br> Correct Number was ${computerGuess}.`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!<br> Better Luck Next Time!<br> Correct Number was ${computerGuess}.`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else {
            userGuessUpdate.innerHTML = "Wow! its Correct..";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    maxGuess = 5;
    startGame();
};