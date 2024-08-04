'use strict';

let secrtNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// click on the 'CHECK' button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // function for 'refactoring' the code....
    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    };

    const displayNumber = function (number) {
        document.querySelector('.number').textContent = number;
    };

    const displayScore = function (score) {
        document.querySelector('.score').textContent = score;
    };

    // when there is no input 
    if (!guess) {
        displayMessage('⛔ Input Number');
        displayNumber('🔢');

        // when player wins
    } else if (guess === secrtNumber) {
        displayMessage('🙂 Correct Number!');
        displayNumber(secrtNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is wrong
    } else if (guess !== secrtNumber) {
        if (score > 1) {
            displayMessage(guess > secrtNumber ? ' 📈 too high!' : '📉 too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            score--;
            displayScore(0);
        }
    }
});

// click on the 'AGAIN' button
document.querySelector('.again').addEventListener('click', function () {
    secrtNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    // CSS Manipulation
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
