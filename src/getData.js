const ulWrap = document.querySelector('.score-list');

let arrOfScores = [];

const previousData = JSON.parse(localStorage.getItem('storedScores'));
const previousInput = JSON.parse(localStorage.getItem('storedInput'));

if (previousInput) {
  [document.querySelector('.name-input').value,
    document.querySelector('.score-input').value] = previousInput;
}

if (!previousData) {
  localStorage.setItem('storedScores', JSON.stringify(arrOfScores));
} else {
  arrOfScores = previousData;
}

arrOfScores.sort((b, a) => a.value - b.value);

for (let i = 0; i < arrOfScores.length; i += 1) {
  const newLi = document.createElement('li');
  ulWrap.appendChild(newLi);
  document.querySelectorAll('.score-list > li')[i].innerText = `${arrOfScores[i].name} : ${arrOfScores[i].value}`;
}