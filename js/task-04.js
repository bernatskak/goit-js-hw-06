
   const refs = {
    value: document.querySelector('.value'),
    increment: document.querySelector('.increment'),
    decrement: document.querySelector('.decrement'),

  };
  let counterValue = 0;

  const render = () => {
    refs.value.textContent = counterValue;
  };
  const decrementValue = () => {
    counterValue -= 1;
    render();
  };

  const incrementValue = () => {
    counterValue += 1;
    render();
  };

  refs.decrement.addEventListener('click', decrementValue());
  refs.increment.addEventListener('click', incrementValue());