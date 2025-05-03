const loginForm = document.getElementById("login-form");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const errorBlock = document.getElementById("error-message");

// assign error message and set display to block to show valiation errors
errorBlock.textContent = "";
errorBlock.style.display = "none";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    email: emailField.value,
    password: passwordField.value,
  };

  // make POST request here
});
