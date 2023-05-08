import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delayInputEl: document.querySelector('[name="delay"]'),
  stepInputEl: document.querySelector('[name="step"]'),
  amountInputEl: document.querySelector('[name="amount"]'),
  formEl: document.querySelector('form'),
};

refs.formEl.addEventListener('submit', onCreatePromiseBtn);

function onCreatePromiseBtn(evt) {
  evt.preventDefault();

  let delay = Number(refs.delayInputEl.value);
  const step = Number(refs.stepInputEl.value);
  const amount = Number(refs.amountInputEl.value);
  if (delay < 0 || step < 0 || amount < 0) {
    Notify.failure(
      `"First delay" and  "Delay step" must be 0 or more. "Amount" must be more than 0.`
    );
    return;
  }
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
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
    console.log(position, delay);
  });
}
