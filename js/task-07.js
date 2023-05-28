const slider = document.getElementById("font-size-control");
const output = document.getElementById("text");
output.style.fontSize = `${slider.value}` + "px";
slider.addEventListener("input", (event) => {
  output.style.fontSize = `${slider.value}` + "px";
});
