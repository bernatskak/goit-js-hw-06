// const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute("data-length"));

// textInput.addEventListener("blur", (event) => {
//   if (
//     event.currentTarget.value.length === textInput.getAttribute("data-length")
//   ) {
//     textInput.classList.add("valid");
//     if (textInput.classList.contains("invalid")) {
//       textInput.classList.remove("invalid");
//     }
//   } else {
//     if (textInput.classList.contains("valid")) {
//       textInput.classList.remove("valid");
//     }
//     textInput.classList.add("invalid");
//   }
// });
const refs = {
  styleEl: document.querySelector("style"),
  inputEl: document.querySelector("#validation-input"),
};
const symbols = Number(refs.inputEl.dataset.length);

refs.inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  event.currentTarget.value.length === symbols
    ? refs.inputEl.classList.add("valid")
    : refs.inputEl.classList.add("invalid");
}
