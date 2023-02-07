let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
