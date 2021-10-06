import './style.css';
import getData from './getData.js';
import saveInput from './saveInput.js';
import addScores from './addScores.js';
import storeGameIdToLocalStorage from './newGame.js';
import reloader from './reloader.js';

// create new game if there isn't and store to local storage for use later
storeGameIdToLocalStorage();

document.querySelector('.name-input').addEventListener('change', saveInput);
document.querySelector('.score-input').addEventListener('change', saveInput);

document.querySelector('.reload-btn').addEventListener('click', reloader);

document.querySelector('.submit-btn').addEventListener('click', addScores);

getData();