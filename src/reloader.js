import getData from './getData.js';

const reloader = () => {
  const scoreNode = document.querySelector('.score-list');
  scoreNode.innerHTML = '';
  getData();
};

export default reloader;