let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const turn = document.querySelector(".guessCount")
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const form = document.querySelector(".form");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

const startButton = document.querySelector(".startButton");

let guessCount = 2;
let userGuess = [];
let resetButton;

function startGame() {
    startButton.parentNode.removeChild(startButton);
    form.style.display = 'block';
}

startButton.addEventListener('click', startGame)

function checkGuess() {
    userGuess.push(Number(guessField.value));
    userGuessSorted = userGuess.slice().sort();

    for (let i = 0; i < userGuessSorted.length - 1; i++) {
        if (userGuessSorted[i + 1] == userGuessSorted[i]) {
            var repeat = true;
        }
    }

    let lastGuess = userGuess[userGuess.length - 1];
    console.log(userGuess);

    if (guessCount === 2) {
        guessField.placeholder = '';
        guesses.textContent = 'Previous Guess: ';
    }

    guesses.textContent += lastGuess + ' ';
    turn.textContent = 'Turn: ' + guessCount;

    if ((lastGuess >= 1) && (lastGuess <= 100)) {
        if ((guessCount <= 1) && (repeat)) {
            guesses.textContent = '';
            turn.textContent = '';
            lastResult.textContent = 'The value must be different from the previous one.';
            lastResult.style.backgroundColor = 'black';
            lowOrHi.textContent = '';
            gameOver();
        } else if (lastGuess === randomNumber) {
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
            if (lastGuess > randomNumber) {
                lowOrHi.textContent = 'Last guess was too high!';
            }
            if (lastGuess < randomNumber) {
                lowOrHi.textContent = 'Last guess was too low!';
            }
        }

        guessCount--;
        guessField.value = '';
        guessField.focus();
    } else {
        guesses.textContent = '';
        turn.textContent = '';
        lastResult.textContent = 'The value entered must be between: 1 and 100.';
        lastResult.style.backgroundColor = 'black';
        lowOrHi.textContent = '';
        gameOver();
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
    userGuess.splice(0, Number.MAX_VALUE);
    guessField.placeholder = 'Exp: 37';
    guesses.textContent = '';
    turn.textContent = '';
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