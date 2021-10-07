const saveInput = () => {
  const nameValue = document.querySelector('.name-input').value;
  const scoreValue = document.querySelector('.score-input').value;
  const saveData = [nameValue, scoreValue];
  localStorage.setItem('storedInput', JSON.stringify(saveData));
};

export default saveInput;