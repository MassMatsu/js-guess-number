'use strict';

function getElement(string) {
  const element = document.querySelector(string);
  if (!element) {
    console.log(`there is no such element: ${string}`);
  }
  return element;
}

function generateAnswer() {
  return Math.ceil(Math.random() * 20);
}

function startGame() {
  currentScore = 20;
  score.textContent = currentScore;
  answer = generateAnswer();
  msg.textContent = 'Start guessing...';
  guess.value = 10;
  number.textContent = '?';
  checkBtn.disabled = false
}

function checkAnswer(input) {
  if (input === answer) {
    msg.textContent = 'you got right!!';
    number.textContent = input;
    checkBtn.disabled = true;

    highestScore = highestScore < currentScore ? currentScore : highestScore;
    highscore.textContent = highestScore;

    return;
  }

  msg.textContent = input < answer ? 'too low' : 'too high';

  currentScore -= 1;
  score.textContent = currentScore;
}

const msg = getElement('.message');
const number = getElement('.number');
const score = getElement('.score');
const highscore = getElement('.highscore');
const guess = getElement('.guess');
const checkBtn = getElement('.check');
const againBtn = getElement('.again');

let guessNum = null;
let answer = null;
let currentScore = 20;
let highestScore = 0;

startGame();

guess.addEventListener('input', (e) => {
  guessNum = parseInt(e.target.value)
  
  if (!guessNum || guessNum > 20 || guessNum < 1) {
    msg.innerHTML = 'please enter <br> a number 1 - 20'
    checkBtn.disabled = true
    return
  }
  msg.textContent = 'Start guessing...'
  checkBtn.disabled = false
})

checkBtn.addEventListener('click', () => {
  checkAnswer(guessNum);
});

againBtn.addEventListener('click', () => {
  startGame();
});
