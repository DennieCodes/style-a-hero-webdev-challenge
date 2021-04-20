// sign-up--alert
const signUpButton = document.getElementById("sign-up--submit");
const emailInput = document.getElementById("email");
const successMessage = document.getElementById("sign-up--success");
const emailAlertMessage = document.getElementById("sign-up--email-alert");
const signUpForm = document.getElementById("sign-up--form");

// Handles when SignUpButton is clicked
signUpButton.addEventListener("click", () => {
  if (emailInput.value === "") {
    emailAlertMessage.classList.remove("hidden");
  } else {
    // On successful sign up, success message and clear email input
    successMessage.classList.remove("hidden");
    emailAlertMessage.classList.add("hidden");
    emailInput.value = "";
  }
});
