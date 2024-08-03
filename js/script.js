'use strict';
/* ==============  DOM (querySelector) ==============
document.querySelector('.number').textContent = '🙌';
document.querySelector('.score').textContent = '30';

// console.log(document.querySelector('.guess').value = '23');
// console.log(`secrt Number = ${secrtNumber}`);

// 'score = score - 1' same as 'score--';
==================================================== */

/*  03. ============== Clean Code using Refactory Technique ============== */
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


/* 01.  =============  How Code is developed step by step  ===============

// click on the 'Check' button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // when there is no input 
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Input Number';
        document.querySelector('.number').textContent = '🔢';

        // when player wins
    } else if (guess === secrtNumber) {
        document.querySelector('.number').textContent = secrtNumber;
        document.querySelector('.message').textContent = '🙂 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess number is too high
    } else if (guess > secrtNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
        }

        // when guess number is too low
    } else if (guess < secrtNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '👎 You lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
        }

    }
});

*/


/* 02.  =============  Apply 'DRY(Don't repeat yourself)' Principle =============

// click on the 'Check' button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input 
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Input Number';
        document.querySelector('.number').textContent = '🔢';

        // when player wins
    } else if (guess === secrtNumber) {
        document.querySelector('.number').textContent = secrtNumber;
        document.querySelector('.message').textContent = '🙂 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is wrong --- DRY principle is applied through 'ternary operator' 
    } else if (guess !== secrtNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secrtNumber ? ' 📈 too high!' : '📉 too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
        }
    }
});

*/
