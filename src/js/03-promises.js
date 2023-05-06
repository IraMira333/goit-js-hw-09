import { Notify } from 'notiflix/build/notiflix-notify-aio';

let position = 0;
const refs = {
  delayInputEl: document.querySelector('[name="delay"]'),
  stepInputEl: document.querySelector('[name="step"]'),
  amountInputEl: document.querySelector('[name="amount"]'),
  createPromiseBtnEl: document.querySelector('button[type="submit"]'),
};

refs.createPromiseBtnEl.addEventListener('click', onCreatePromiseBtn);

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
      return;
    }
    delayPlusStep += step * (position - 1);
    console.log(position, delayPlusStep);
  }, delayPlusStep);
  console.log(delay, step, amount, position);
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
