const refs = {
  value: document.querySelector(".value"),
  increment: document.querySelector(".increment"),
  decrement: document.querySelector(".decrement"),
};
let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

const incrementValue = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};

refs.decrement.addEventListener("click", decrementValue());
refs.increment.addEventListener("click", incrementValue());
