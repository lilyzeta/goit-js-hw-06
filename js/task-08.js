const form = document.querySelector(".login-form");
const alertMessage = "All fields must be filled in!";

const users = {
  email: email,
  password: password,
};

form.addEventListener("submit", submitAct);

function submitAct(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value.trim() === "") {
    return alert("All Fields must be filled in");
  }
  console.log(`Login: ${email.value}, Password: ${password.value.trim()}`);
  event.currentTarget.reset();
}
