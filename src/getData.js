const ulWrap = document.querySelector('.score-list');

const previousInput = JSON.parse(localStorage.getItem('storedInput'));
if (previousInput) {
  [document.querySelector('.name-input').value,
    document.querySelector('.score-input').value] = previousInput;
}

const getData = () => {
  const currentID = JSON.parse(localStorage.getItem('storedGameId'));
  const importData = async () => {
    const fetchScores = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${currentID}/scores`);
    const update = await fetchScores;
    const jsonObject = await update.json();
    return jsonObject.result;
  };

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
};

export default getData;