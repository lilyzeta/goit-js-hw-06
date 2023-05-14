const form = document.querySelector(".login-form");
const alertMessage = "All fields must be filled in!";

const users = {
  email: email,
  password: password,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value || password.value == null) {
    alert("All Fields Must Be Filled In!");
  } else {
    (users.email = email.value), (users.password = password.value);
  }
  console.log(email.value, password.value);
});
