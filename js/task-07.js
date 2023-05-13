const input = document.getElementById("#font-size-control");
const output = document.getElementById("#text");
input.addEventListener("input", (event) => {
  const value = Number(input.value) / `input.max.value - input.min.value`;
  output.style.setProperty("font-size", `${value}`);
});
