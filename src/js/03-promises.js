import { Notify } from 'notiflix/build/notiflix-notify-aio';

let position = 0;
const refs = {
  delayInputEl: document.querySelector('[name="delay"]'),
  stepInputEl: document.querySelector('[name="step"]'),
  amountInputEl: document.querySelector('[name="amount"]'),
  createPromiseBtnEl: document.querySelector('button[type="submit"]'),
};

refs.createPromiseBtnEl.addEventListener('submit', onCreatePromiseBtn);

function onCreatePromiseBtn(evt) {
  evt.preventDefault();

  const delay = Number(refs.delayInputEl.value);
  const step = Number(refs.stepInputEl.value);
  const amount = Number(refs.amountInputEl.value);
  let delayPlusStep = delay;
  const intervalId = setInterval(() => {
    position += 1;
    if (position > amount) {
      clearInterval(intervalId);
      refs.delayInputEl.value = '';
      refs.stepInputEl.value = '';
      refs.amountInputEl.value = '';
      position = 0;
      return;
    }
    delayPlusStep += step * (position - 1);
    createPromise(position, delayPlusStep)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    console.log(position, delayPlusStep);
  }, delayPlusStep);
  console.log(delay, step, amount, position);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
