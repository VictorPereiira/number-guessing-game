let randomNumber = Math.floor(Math.random() * 100) + 1,
    guessCount = 2,
    userGuess = [],
    resetButton;

const guesses = document.querySelector(".guesses"),
    turn = document.querySelector(".guessCount"),
    lastResult = document.querySelector(".lastResult"),
    lowOrHi = document.querySelector(".lowOrHi");

const form = document.querySelector(".form"),
    guessField = document.querySelector(".guessField"),
    guessSubmit = document.querySelector(".guessSubmit");

const startButton = document.querySelector(".startButton");


function startGame() {
    startButton.parentNode.removeChild(startButton);
    form.style.display = 'block';
    guessField.placeholder = 'Exp: 37'
    guesses.textContent = 'Previous Guess: ';
    turn.textContent = 'Turn: 3'
    guessField.focus();
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

    guesses.textContent += lastGuess + ' ';
    turn.textContent = 'Turn: ' + guessCount;

    if ((lastGuess >= 1) && (lastGuess <= 100)) {
        if ((guessCount <= 1) && (repeat)) {
            action('The value must be different from the previous one.', 'black');
        } else if (lastGuess === randomNumber) {
            action('Congratulations! You got it right!', 'green');
        } else if (guessCount === 0) {
            action('GAME OVER!!!', 'black');
        } else {
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'red';

            lastGuess > randomNumber ? lowOrHi.textContent = 'Last guess was too high!' : lastGuess;
            lastGuess < randomNumber ? lowOrHi.textContent = 'Last guess was too low!' : lastGuess;
        }

        guessCount--;
        guessField.value = '';
        guessField.focus();
    } else {
        action('The value entered must be between: 1 and 100.', 'black')
    }
}

guessSubmit.addEventListener('click', checkGuess);

function action(text, color) {
    lastResult.textContent = text;
    lastResult.style.backgroundColor = color;
    gameOver()
}

function gameOver() {
    lowOrHi.textContent = '';
    guessField.placeholder = '';
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

