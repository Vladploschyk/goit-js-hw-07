// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

function getName() {
  spanText.textContent = inputText.value;
}
inputText.addEventListener("input", getName);
