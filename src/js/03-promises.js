import { Notify } from 'notiflix/build/notiflix-notify-aio';

// получаем доступ к форме и везаем слушателя сабмит
const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

// создаем функцию для создания промиса
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

// создаем функцию сабмита
function handleSubmit(event) {

  // отменяем перезагрузку страницы
  event.preventDefault();

  // достаем введенные значения из полей формы
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  let enteredDelay = Number(delay.value);
  const enteredStep = Number(step.value);
  const enteredAmount = Number(amount.value);

  // запускаем цикл до тех пор пока кол-во запусков не станет равно enteredAmount
  for (let i = 1; i <= enteredAmount; i += 1) {

// при каждом запуске цикла вызываем функцию создания промиса
// первая итерация с задержкой равной enteredDelay
    createPromise(i, enteredDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    // увеличиваем задержку для последующих итераций на enteredStep
    enteredDelay += enteredStep;
  }
}