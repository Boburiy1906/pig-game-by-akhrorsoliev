// Image
const dice = document.querySelector('.dice');
dice.style.display = "none"

//Buttons
const BtnNew = document.querySelector('.btn--new');
const BtnRoll = document.querySelector('.btn--roll');
const BtnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


//current counter
const currentScore1 = document.querySelector('.current-score');

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

const switchPlayer = () => {
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 1 ? 0 : 1;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

BtnRoll.addEventListener('click', () => {
  if (gameOver) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.style.display = 'block';
    dice.src = `/dice-${randomNumber}.png`
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    if (randomNumber == 1) {
      switchPlayer()
    }
  }
})

// Hold score button
BtnHold.addEventListener('click', () => {
  if (gameOver) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    if (score[activePlayer] >= 10) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      gameOver = false;
    } else {
      switchPlayer();
    }
  }
})

// new game

BtnNew.addEventListener('click', () => {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner')
  document.querySelector('.player--1').classList.remove('player--winner')
  document.querySelector('.player--1').classList.remove('player--active')
  document.querySelector('.player--0').classList.add('player--active')
})