let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const guessCountView = document.querySelector(".guessCount")
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 2;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);

    if (guessCount === 2) {
        guessField.placeholder = '';
        guesses.textContent = 'Previus guess: ';
    }

    guesses.textContent += userGuess + ' ';
    guessCountView.textContent = 'Guess Count: ' + guessCount;

    if (userGuess === 0) {
        guesses.textContent = '';
        guessCountView.textContent = '';
        lastResult.textContent = 'The value entered must be between: 1 and 100.';
        lastResult.style.backgroundColor = 'black';
        lowOrHi.textContent = '';
        gameOver();
    } else {
        if (userGuess === randomNumber) {
            lastResult.textContent = 'Congratulations! You got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            gameOver();
        } else if (guessCount === 0) {
            lastResult.textContent = 'GAME OVER!!!';
            lastResult.style.backgroundColor = 'black';
            lowOrHi.textContent = '';
            gameOver();
        } else {
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
            if (userGuess > randomNumber) {
                lowOrHi.textContent = 'Last guess was too high!';
            }
            if (userGuess < randomNumber) {
                lowOrHi.textContent = 'Last guess was too low!';
            }
        }

        guessCount--;
        guessField.value = '';
        guessField.focus();
    }
}

guessSubmit.addEventListener('click', checkGuess);

function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 2;
    guessField.placeholder = 'Exp: 37';
    guesses.textContent = '';
    guessCountView.textContent = '';
    lastResult.textContent = '';

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}