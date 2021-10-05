import './style.css';
import getData from './getData.js';

const Reloader = document.querySelector('.reload-btn');

Reloader.addEventListener('click', () => {
  window.location.reload();
});

getData();