const slider = document.getElementById("font-size-control");
const output = document.getElementById("text");

slider.addEventListener("input", (event) => {
  output.style.fontSize = `${slider.value}` + "px";
});
