const counter = document.querySelector("#value");
let count = counter.innerHTML;

const increment = () => {
  count++;
  counter.innerHTML = count;
};

const decrement = () => {
  count--;
  counter.innerHTML = count;
};

const buttons = document.querySelectorAll("button");

const downButton = counter.previousElementSibling;
const upButton = counter.nextElementSibling;

downButton.addEventListener("click", decrement);
upButton.addEventListener("click", increment);
