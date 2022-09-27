const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
startBtn.addEventListener('click', activeStartBtn);
stopBtn.addEventListener('click', inActiveBtn);

function activeStartBtn() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  if (startBtn) {
    startBtn.disabled = true;
  }
  stopBtn.disabled = false;
}
function inActiveBtn() {
  clearInterval(timerId);
  startBtn.disabled = false;
  if (stopBtn) {
    stopBtn.disabled = true;
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
