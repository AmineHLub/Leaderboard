class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

const currentID = JSON.parse(localStorage.getItem('storedGameId'));

async function sendScoreToApi() {
  const objectMaking = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${currentID}/scores`, {
    method: 'POST',
    body: JSON.stringify(new Score(document.querySelector('.name-input').value,
      document.querySelector('.score-input').value)),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await objectMaking;
  await response.json();
  window.location.reload();
}

const addScores = () => {
  const name = document.querySelector('.name-input').value;
  const val = document.querySelector('.score-input').value;
  if (name && val) {
    sendScoreToApi();
  }
};

export default addScores;