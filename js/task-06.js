const stringInput = document.querySelector("#validation-input");

stringInput.addEventListener("blur", blurCheck);

function blurCheck(blur) {
  if (blur.target.value.length !== 6) {
    stringInput.style.borderColor = "red";
  } else {
    stringInput.style.borderColor = "green";
  }
}
