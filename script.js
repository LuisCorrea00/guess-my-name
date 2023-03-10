'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Nenhum número!');

  } else if (guess === secretNumber) {
      displayMessage('Número Correto!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? 'Muito alto!' : 'Muito baixo!');
    score--;
    document.querySelector('.score').textContent = score;

  }else if (score <= 1) {
      displayMessage('Você perdeu!');
      score--;
      document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Comece a adivinhar...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ''
});