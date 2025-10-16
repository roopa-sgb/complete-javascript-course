'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let guess = 0;
let score = 20;
let highestScore = 0;

const lostGame = function () {
  document.querySelector('.message').textContent = '😢 You Lost The Game !';
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🛑 No Number !');
  } else if (guess != secretNumber) {
    if (score === 0) {
      lostGame();
    } else {
      guess < secretNumber
        ? displayMessage('📉 Too Low ! ')
        : displayMessage('📈 Too High ! ');
      document.querySelector('.score').textContent = --score;
    }
  } else if (guess === secretNumber) {
    if (score === 0) {
      lostGame();
    } else {
      displayMessage('🏆 Success ! ');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';

      if (score > highestScore) {
        console.log(score);
        console.log(highestScore);
        highestScore = score;
        document.querySelector('.highscore').textContent = score;
      } else {
        document.querySelector('.highscore').textContent = highestScore;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = highestScore;
});
