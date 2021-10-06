import './style.css';
import getData from './getData.js';
import saveInput from './saveInput.js';
import addScores from './addScores.js';
import storeGameIdToLocalStorage from './newGame.js';
import reloader from './reloader.js';

storeGameIdToLocalStorage();

document.querySelector('.name-input').addEventListener('change', saveInput);
document.querySelector('.score-input').addEventListener('change', saveInput);

document.querySelector('.reload-btn').addEventListener('click', reloader);

document.querySelector('.submit-btn').addEventListener('click', addScores);

getData();