function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChange = document.querySelector(".change-color");
const background = document.querySelector(".color");
const style = document.querySelector(".widget");

colorChange.addEventListener("click", () => {
  style.style.backgroundColor = getRandomHexColor();
  background.textContent = getRandomHexColor();
});
