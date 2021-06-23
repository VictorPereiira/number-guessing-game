let randomNumber = Math.floor(Math.random() * 100) + 1,
    guessCount = 2,
    userGuess = [];
// resetButton;

let data = {
    repeat: { text: 'The value must be different from the previous one.', color: 'black' },
    win: { text: 'Congratulations! You got it right!', color: 'green' },
    gameOver: { text: 'GAME OVER!!!', color: 'black' },
    invalid: { text: 'The value entered must be between: 1 and 100!', color: 'black' }
}

const guesses = document.querySelector(".guesses"),
    turn = document.querySelector(".guessCount"),
    lastResult = document.querySelector(".lastResult"),
    lowOrHi = document.querySelector(".lowOrHi");

const form = document.querySelector(".form"),
    guessField = document.querySelector(".guessField"),
    guessSubmit = document.querySelector(".guessSubmit"),
    statistics = document.querySelector(".statistics")

const button = document.querySelector(".button"),
    resetButton = document.querySelector(".resetButton");


function startGame() {
    button.style.display = 'none';
    form.style.display = 'block';
    guessField.focus();
}

button.addEventListener('click', startGame)

function checkGuess() {
    userGuess.push(Number(guessField.value));
    userGuessSorted = userGuess.slice().sort();

    for (let i = 0; i < userGuessSorted.length - 1; i++) {
        if (userGuessSorted[i + 1] == userGuessSorted[i]) {
            var repeat = true;
        }
    }

    if (guessCount === 2) {
        statistics.style.display = 'block';
        guesses.textContent = 'Guesses: '
    }

    let lastGuess = userGuess[userGuess.length - 1];
    console.log(userGuess);

    guesses.textContent += lastGuess + ' ';
    turn.textContent = 'Turn: ' + guessCount;

    if ((lastGuess >= 1) && (lastGuess <= 100)) {
        if (repeat) {
            action(data.repeat);
        } else if (lastGuess === randomNumber) {
            action(data.win);
        } else if (guessCount === 0) {
            action(data.gameOver);
        } else {
            lastResult.textContent = 'WRONG!';
            lastResult.style.color = 'red'

            lastGuess > randomNumber ? lowOrHi.textContent = 'Last guess was too high!' : lastGuess;
            lastGuess < randomNumber ? lowOrHi.textContent = 'Last guess was too low!' : lastGuess;
        }

        guessCount--;
        guessField.value = '';
        guessField.focus();
    } else {
        action(data.invalid)
    }
}

guessSubmit.addEventListener('click', checkGuess)


function action(obj) {
    console.log(obj)
    lastResult.textContent = obj.text;
    lastResult.style.color = obj.color;
    gameOver()
}

function gameOver() {
    lowOrHi.textContent = '';
    guessField.placeholder = '';
    guessField.disabled = true;
    guessSubmit.style.display = 'none';
    statistics.style.display = 'none';
    button.style.display = 'block';
    button.style.margin = '20px auto 0 auto';
    button.textContent = 'Start new game';
    button.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 2;
    userGuess.splice(0, Number.MAX_VALUE);
    guessField.placeholder = 'Exp: 37';
    lastResult.textContent = '';

    button.style.display = 'none';
    guessField.disabled = false;
    guessSubmit.style.display = 'block';
    guessSubmit.style.margin = '20px auto 0 auto';
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}

