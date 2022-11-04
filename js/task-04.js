const refs = {
  value: document.querySelector("#value"),
  increment: document.querySelector('button[data-action="increment"]'),
  decrement: document.querySelector('button[data-action="decrement"]'),
};

const counterValue = {
  value: 0,
  decrementValue() {
    this.value -= 1;
    return (refs.value.textContent = this.value);
  },

  incrementValue() {
    this.value += 1;
    return (refs.value.textContent = this.value);
  },
};

refs.increment.addEventListener(
  "click",
  counterValue.incrementValue.bind(counterValue)
);

refs.decrement.addEventListener(
  "click",
  counterValue.decrementValue.bind(counterValue)
);
