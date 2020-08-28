// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const startValue = document.querySelector("#value");
let counterValue = 0;
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", () => (startValue.textContent = --counterValue));
document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", () => (startValue.textContent = ++counterValue));
