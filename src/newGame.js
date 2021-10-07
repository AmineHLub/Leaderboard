const storedGameID = JSON.parse(localStorage.getItem('storedGameId'));

const storeGameIdToLocalStorage = async () => {
  if (!storedGameID) {
    const createGameAPI = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      body: JSON.stringify({
        name: 'newgame',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await createGameAPI;
    const json = await response.json();
    let gameID = json;
    gameID = gameID.result.split(' ');
    localStorage.setItem('storedGameId', JSON.stringify(gameID[3]));
  }
};

export default storeGameIdToLocalStorage;
