let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previus guess: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        gameOver();
    } else if (guessCount === 3) {
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

    guessCount++;
    guessField.value = '';
    guessField.focus();
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
    alert('Ready for the next match?');
}