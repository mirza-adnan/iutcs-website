const signupForm = document.getElementById("signup-form");
const nameField = document.getElementById("fullName");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const errorBlock = document.getElementById("error-message");

// assign error message and set display to block to display validation errors
errorBlock.textContent = "";
errorBlock.style.display = "none";

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  errorBlock.textContent = "";
  errorBlock.style.display = "none";

  if (passwordField.value === confirmPasswordField.value) {
    const data = {
      name: nameField.value,
      email: emailField.value,
      passwordField: passwordField.value,
    };

    // make POST request here
  } else {
    errorBlock.style.display = "block";
    errorBlock.textContent = "Passwords don't match.";
  }
});
