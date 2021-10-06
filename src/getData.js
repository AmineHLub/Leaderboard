const ulWrap = document.querySelector('.score-list');

const previousInput = JSON.parse(localStorage.getItem('storedInput'));
if (previousInput) {
  [document.querySelector('.name-input').value,
    document.querySelector('.score-input').value] = previousInput;
}

const arrOfScores = [];

const currentID = JSON.parse(localStorage.getItem('storedGameId'));

async function importData() {
  const fetchScores = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${currentID}/scores`);
  const response = await fetchScores;
  const result = await response.json();
  console.log(result);
}
if (currentID) {
  importData();
}

// arrOfScores = previousData;

arrOfScores.sort((b, a) => a.value - b.value);

for (let i = 0; i < arrOfScores.length; i += 1) {
  const newLi = document.createElement('li');
  ulWrap.appendChild(newLi);
  document.querySelectorAll('.score-list > li')[i].innerText = `${arrOfScores[i].name} : ${arrOfScores[i].value}`;
}