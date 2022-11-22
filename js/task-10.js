function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");

function rendomRGB() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return rgb($red, $green, $blue);
}
function createBoxes(amount) {
  let size = 30;
  amount = Number(input.value);
  console.log(amount);
  console.log(typeof amount);
  const boxArr = [];
  for (let i = 1; i <= amount; i += 1) {
    let growingSize = size + i * 10;
    let boxElement = (
      <div style=" height:${growingSize}px; width:${growingSize}px; background-color:${rendomRGB()}; margin: 5px;"></div>
    );
    boxArr.push(boxElement);
    console.log(size);
    console.log(boxArr);
  }
  divBoxes.insertAdjacentHTML("beforebegin", boxArr.join(""));
}

function destroyBoxes() {
  input.value = "";
  divBoxes.innerHTML = "";
}
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
