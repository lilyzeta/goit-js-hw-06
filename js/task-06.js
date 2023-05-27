const stringInput = document.querySelector("#validation-input");

stringInput.addEventListener("blur", blurCheck);

function blurCheck(blur) {
  if (blur.target.value.length !== 6) {
    stringInput.classList.remove("valid");
    stringInput.classList.add("invalid");
  } else {
    stringInput.classList.remove("invalid");
    stringInput.classList.add("valid");
  }
}
