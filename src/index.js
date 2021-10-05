import './style.css';
import getData from './getData.js';
import saveInput from './saveInput.js';

document.querySelector('.name-input').addEventListener('change', saveInput);
document.querySelector('.score-input').addEventListener('change', saveInput);

getData();
const Reloader = document.querySelector('.reload-btn');

Reloader.addEventListener('click', () => {
  window.location.reload();
});