//import {currentScore, highest} from '../app.js'

function getRandomNum() {
  return Math.floor(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function initializeValues(currentScore,  highest, answer) {
  document.querySelector('.number').textContent = answer;
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.highscore').textContent = highest;
  document.querySelector('.guess').value = 10;
  document.querySelector('body').style.backgroundColor = '#333';
  displayMessage('Start guessing...');
}

 
export {getRandomNum, displayMessage, initializeValues}
