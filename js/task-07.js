const controlFont = document.getElementById("font-size-control");

const text = document.getElementById("text");

controlFont.oninput = function () {
  text.style.fontSize = controlFont.value + "px";
};
