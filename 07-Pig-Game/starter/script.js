'use strict';
const btnNewGame = document.querySelector('.btn--new');
const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');
const player1Winner = document.querySelector('.player1-win');
const player2Winner = document.querySelector('.player2-win');
let diceNumber = 0;
let gameOver = false;
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const init = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  dice.classList.add('hidden');
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  player1Winner.classList.add('hidden');
  player2Winner.classList.add('hidden');
  gameOver = false;
};

const switchPlayer = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const winner = function () {
  if (Number(player1CurrentScore.textContent) >= 100) {
    player1.classList.add('player--winner');
    player1Winner.classList.remove('hidden');
    dice.classList.add('hidden');
    gameOver = true;
  } else if (Number(player2CurrentScore.textContent) >= 100) {
    player2.classList.add('player--winner');
    player2Winner.classList.remove('hidden');
    dice.classList.add('hidden');
    gameOver = true;
  }
};

init();
btnNewGame.addEventListener('click', init);

btnRollDice.addEventListener('click', function () {
  if (gameOver) return;
  diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    switchPlayer();
  } else {
    player1.classList.contains('player--active')
      ? (player1CurrentScore.textContent =
          Number(player1CurrentScore.textContent) + diceNumber)
      : (player2CurrentScore.textContent =
          Number(player2CurrentScore.textContent) + diceNumber);

    winner();
  }
});

btnHold.addEventListener('click', function () {
  if (gameOver) return;
  player1.classList.contains('player--active')
    ? (player1Score.textContent = player1CurrentScore.textContent)
    : (player2Score.textContent = player2CurrentScore.textContent);
  winner();
  switchPlayer();
});
