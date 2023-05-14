const slider = document.getElementById("font-size-control");
const output = document.getElementById("text");

slider.addEventListener(input, handleEvent);
function handleEvent() {
  output.style.fontSize = this.value;
}
