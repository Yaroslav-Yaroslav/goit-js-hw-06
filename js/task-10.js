function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesDivRef = document.querySelector("#boxes");
const inputRef = createBtnRef.previousElementSibling;
let amountBoxes = 0;
let widthBox = 20;
let heightBox = 20;
let divArr = [];

inputRef.addEventListener("input", onInputChange);
createBtnRef.addEventListener("click", onBtnClickCreate);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = `${getRandomHexColor()}`;
    widthBox += 10;
    div.style.width = `${widthBox}px`;
    heightBox += 10;
    div.style.height = `${heightBox}px`;
    divArr.push(div);
  }
  boxesDivRef.append(...divArr);
}

function destroyBoxes() {
  boxesDivRef.innerHTML = "";
  widthBox = 20;
  heightBox = 20;
  divArr = [];
}

function onInputChange(event) {
  amountBoxes = event.currentTarget.value;
}

function onBtnClickCreate() {
  createBoxes(amountBoxes);
}
