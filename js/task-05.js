// const refs = {
//   textInput: document.querySelector(".text-input"),
//   output: document.querySelector(".output"),
// };
// function onTextInput(event) {
//   console.log(event.currentTarget.value);
//   refs.textInput.textContent = event.currentTarget.value;
// }
// refs.textInput.addEventListener("input", onTextInput);
const refs = (event) => {
  refs.textInput.value.length === "0"
    ? (refs.output.textContent = "Anpnimus")
    : (refs.output.textContent = event.currentTarget.value);
};
console.log(refs.output);
refs.textInput.addEventListener("input", refs);
