import getData from './getData.js';

export default function reloader() {
  const scoreNode = document.querySelector('.score-list');
  scoreNode.innerHTML = '';
  getData();
}