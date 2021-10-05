class Score {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}
export default function addScores() {
  const name = document.querySelector('.name-input').value;
  const val = document.querySelector('.score-input').value;
  if (name && val) {
    const previousData = JSON.parse(localStorage.getItem('storedScores'));
    previousData.push(new Score(name, val));
    localStorage.setItem('storedScores', JSON.stringify(previousData));
    // eslint-disable-next-line no-implied-eval
    setTimeout('window.location.reload()', 0);
  }
}
