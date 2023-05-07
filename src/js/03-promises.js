import { Notify } from 'notiflix/build/notiflix-notify-aio';

let position = 0;
const refs = {
  delayInputEl: document.querySelector('[name="delay"]'),
  stepInputEl: document.querySelector('[name="step"]'),
  amountInputEl: document.querySelector('[name="amount"]'),
  formEl: document.querySelector('form'),
};

refs.formEl.addEventListener('submit', onCreatePromiseBtn);

function onCreatePromiseBtn(evt) {
  evt.preventDefault();

  const delay = Number(refs.delayInputEl.value);
  const step = Number(refs.stepInputEl.value);
  const amount = Number(refs.amountInputEl.value);

  for (let i = 1; i <= amount; i += 1) {
    const delayTime = delay + (i - 1) * step;
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
