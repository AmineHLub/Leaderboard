import './style.css';
import getData from './getData.js';
import saveInput from './saveInput.js';
import addScores from './addScores.js';
import storeGameIdToLocalStorage from './newGame.js';

// create new game if there isn't
storeGameIdToLocalStorage();

document.querySelector('.name-input').addEventListener('change', saveInput);
document.querySelector('.score-input').addEventListener('change', saveInput);

const Reloader = document.querySelector('.reload-btn');
Reloader.addEventListener('click', () => {
  window.location.reload();
});

document.querySelector('.submit-btn').addEventListener('click', addScores);
getData();