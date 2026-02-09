// Selecting form and input elements
let form = document.querySelector("form");
let passwordInput = document.querySelector ("password");
let passToggleBtn = document.querySelector("pass-toggle-btn");

// Function to display error messages
let showError = (field, errorText) => {
    field.classList.add("error");
    let errorElement = document.createElement ("small");
    errorElement.classList.add(error-text);
    errorElement.innerText = errorText;
    field.closest (".form-group") .appendChild(errorElement);
}

// Function to handle form submission
let handleFormData = () => {
    e.preventDefault();

    let fullnameInput = document.getElementById("fullname");
    let emailInput = document.getElementById("email");
    let dateInput = document.getElementById("date");
    let genderInput = document.getElementById("gender");
    
    // Getting trimmed values from input fields
    let fullname = fullnameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let date = dateInput.value;
    let gender = genderInput.value;

    // Regular expression pattern for email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      // Clearing previous error messages
      document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }
    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;
    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
// Handling form submission event
form.addEventListener("submit", handleFormData);