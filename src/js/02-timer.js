// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputTime: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysData: document.querySelector('[data-days]'),
  hoursData: document.querySelector('[data-hours]'),
  minutesData: document.querySelector('[data-minutes]'),
  secondsData: document.querySelector('[data-seconds]'),
};

const { inputTime, startBtn, daysData, hoursData, minutesData, secondsData } =
  refs;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future', {
        position: 'center-center',
      });
      startBtn.disabled = true;
      return;
    }
    startBtn.disabled = false;
  },
};
startBtn.disabled = true;
class Timer {
  constructor() {
    this.timerID = null;
    this.isActive = false;
  }
  start() {
    if (this.isActive) {
      return;
    }
    startBtn.disabled = true;
    const timed = new Date(inputTime.value);
    Notify.success('The countdown has begun!', { position: 'center-center' });
    this.isActive = true;
    this.timerID = setInterval(() => {
      const currentTime = new Date();
      const deltaTime = timed - currentTime;
      const componentsTimer = convertMs(deltaTime);
      this.updateClockface(componentsTimer);
    }, 1000);
  }
  updateClockface({ days, hours, minutes, seconds }) {
    daysData.textContent = addLeadingZero(days);
    hoursData.textContent = addLeadingZero(hours);
    minutesData.textContent = addLeadingZero(minutes);
    secondsData.textContent = addLeadingZero(seconds);
  }
}

const timer = new Timer();
flatpickr(inputTime, options);

startBtn.addEventListener('click', () => timer.start());
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

inputTime.style.cssText = `
width: 180px;
height: 40px;
    border: 1px solid blue;
        border-radius: 5%;
            text-align: center;
`;
startBtn.style.cssText = `
width: 80px;
height: 40px;

    border-radius: 5%;
`;
