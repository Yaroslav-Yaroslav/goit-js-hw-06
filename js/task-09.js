function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomHexColor = getRandomHexColor();

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

buttonRef.addEventListener("click", onBtnClick);

function onBtnClick() {
  document.body.style.backgroundColor = randomHexColor;
  spanRef.textContent = randomHexColor;
}
