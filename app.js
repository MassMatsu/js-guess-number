import {getRandomNum, displayMessage, initializeValues } from './utils/utils.js'

// state values
let answer = getRandomNum();
export let currentScore = 20;
export let highest = 0;

// set values and display
initializeValues(currentScore, highest)

// when click check button
document.querySelector('.check').addEventListener('click', () => {
  const guess = parseInt(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫invalid entry');
  } else if (guess === answer) {
    document.querySelector('.number').textContent = answer;
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';

    highest = currentScore > highest ? currentScore : highest;
  } else if (guess !== answer) {
    if (currentScore > 1) {
      displayMessage(guess > answer ? '👇 too high' : '☝🏻 too low');
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// when click again button to play again
document.querySelector('.again').addEventListener('click', () => {
  answer = getRandomNum();
  currentScore = 20;

  initializeValues(currentScore, highest)
});
