import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  startBtnEl: document.querySelector('button[data-start]'),
  daysSpanEl: document.querySelector('span[data-days]'),
  hoursSpanEl: document.querySelector('span[data-hours]'),
  minutesSpanEl: document.querySelector('span[data-minutes]'),
  secondsSpanEl: document.querySelector('span[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const startTime = selectedDates[0];
    const startTimeMs = startTime.getTime();

    if (startTime - options.defaultDate < 0) {
      alert('Please choose a date in the future');
      return;
    }
    if (startTime - options.defaultDate > 0) {
      refs.startBtnEl.removeAttribute('disabled', '');
      options.startTimeMs = startTimeMs;
    }
  },
  onStartTimerBtnClick() {
    setInterval(() => {
      const currentTimeMs = Date.now();
      const deltaTime = options.startTimeMs - currentTimeMs;

      console.log(deltaTime);
    }, 1000);
  },
};

refs.startBtnEl.setAttribute('disabled', '');
refs.startBtnEl.addEventListener('click', options.onStartTimerBtnClick);

const fp = flatpickr('#datetime-picker', options);

function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.daysSpanEl.textContent = `${days}`;
  refs.hoursSpanEl.textContent = `${hours}`;
  refs.minutesSpanEl.textContent = `${minutes}`;
  refs.secondsSpanEl.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
