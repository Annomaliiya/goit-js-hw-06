const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const minusCountBtn = document.querySelector('[data-action = decrement]');

const plusCountBtn = document.querySelector('[data-action = increment]');

minusCountBtn.addEventListener('click', () => {
    counterValue--;
    counterValueEl.textContent = counterValue;
});

plusCountBtn.addEventListener('click', () => {
    counterValue++;
    counterValueEl.textContent = counterValue;
});
