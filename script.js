'use strict';

//secret number
//takes a math method that gives a random number 
//from 0-1 and by multiplying it by 20 it gives between 0-20
//and we don't want zero thats why we incriment it by 1
//trunc method gives a natural number not float
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let finalScore = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

const changeCss = function (color, width) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage(guess);

        //When guess is correct
    } else if (guess === secretNumber) {

        displayMessage('❤ correct number')
        displayNumber(secretNumber);
        finalScore++
        displayScore(finalScore);
        changeCss('green', '200px')

        if (finalScore > highscore) {
            highscore = finalScore;
            document.querySelector('.highscore').textContent = highscore;
        }

        //When guess is too high
    } else if (guess !== secretNumber) {
        if (finalScore > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low')
            finalScore--
            displayScore(finalScore);

        } else {
            displayMessage('😢 YOU LOST THE GAME!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    let finalScore = 20;
    changeCss('#222', '15rem')
    displayNumber('?');
    displayMessage('Start guessing...');
    displayScore(finalScore);
    document.querySelector('.guess').value = '';
});