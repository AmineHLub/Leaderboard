const ulWrap = document.querySelector('.score-list');

const previousInput = JSON.parse(localStorage.getItem('storedInput'));
if (previousInput) {
  [document.querySelector('.name-input').value,
    document.querySelector('.score-input').value] = previousInput;
}

const currentID = JSON.parse(localStorage.getItem('storedGameId'));

async function importData() {
  const fetchScores = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${currentID}/scores`);
  const response = await fetchScores;
  const jsonObject = await response.json();
  return jsonObject.result;
}

if (currentID) {
  importData().then((arrOfScores) => {
    arrOfScores.sort((b, a) => a.score - b.score);
    for (let i = 0; i < arrOfScores.length; i += 1) {
      const newLi = document.createElement('li');
      ulWrap.appendChild(newLi);
      document.querySelectorAll('.score-list > li')[i].innerText = `${arrOfScores[i].user} : ${arrOfScores[i].score}`;
    }
  });
}

// arrOfScores = previousData;
