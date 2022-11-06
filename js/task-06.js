const refs = {
  styleEl: document.querySelector("style"),
  inputEl: document.querySelector("#validation-input"),
};
const symbols = Number(refs.inputEl.dataset.length);

refs.inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  event.currentTarget.value.length === symbols
    if (refs.inputEl.classList.add("valid")
    : refs.inputEl.classList.add("invalid");
}
