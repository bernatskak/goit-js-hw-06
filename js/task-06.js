const refs = {
  inputEl: document.querySelector("#validator-input"),
};
const symbols = Number(refs.inputEl.data - length);
console.log(symbols);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  event.currentTarget.value.length === symbols
    ? refs.inputEl.classList.add("valid")
    : refs.inputEl.classList.add("invalid");
}
refs.inputEl.addEventListener("blur", onInputBlur);
