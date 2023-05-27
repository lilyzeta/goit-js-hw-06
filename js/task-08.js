const form = document.querySelector(".login-form");

const users = {
  email: "",
  password: "",
};

form.addEventListener("submit", submitAct);

function submitAct(event) {
  event.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("All Fields must be filled in");
  } else {
    users.email = email.value;
    users.password = password.value;
    form.reset();
  }
  console.log(users);
}
