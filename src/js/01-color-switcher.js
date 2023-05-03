const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.body;

let intervalId = null;

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  console.log(`Start`);
  //startBtnEl.removeEventListener('click', onStartBtnClick);
  startBtnEl.setAttribute('disabled', '');
  intervalId = setInterval(bodyColorChander, 1000);
}

function onStopBtnClick() {
  console.log(`Stop`);
  startBtnEl.removeAttribute('disabled', '');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bodyColorChander() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
