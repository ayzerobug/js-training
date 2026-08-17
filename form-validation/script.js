import {
  validate,
  isRequired,
  isEmail,
  isMinLength,
  isMatch,
} from "./validators.js";

const nameError = validate("Ayomide", [isRequired()]);

const emailError = validate("ayomide@gmail", [isRequired(), isEmail()]);

const passwordError = validate("password", [isRequired(), isMinLength(8)]);

const confirmPassword = validate("password", [
  isRequired(),
  isMinLength(8),
  isMatch("password", "Password confirmation doesn't match"),
]);

console.log(confirmPassword);

const showError = (fieldId, message) => {
  const field = document.querySelector(`#${fieldId}`);
  const errorEl = document.querySelector(`#${fieldId}-error`);
  field.classList.add("invalid");
  errorEl.textContent = message;
};

// Clear the error when the field is valid
const clearError = (fieldId) => {
  const field = document.querySelector(`#${fieldId}`);
  const errorEl = document.querySelector(`#${fieldId}-error`);
  field.classList.remove("invalid");
  errorEl.textContent = "";
};

document.querySelector("#register-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirm = document.querySelector("#confirm").value;

  const errors = {
    name: validate(name, [isRequired()]),
    email: validate(email, [isRequired(), isEmail()]),
    password: validate(password, [isRequired(), isMinLength(8)]),
    confirm: validate(confirm, [
      isRequired(),
      isMinLength(8),
      isMatch(password),
    ]),
  };

  for (const [fieldName, errorMsg] of Object.entries(errors)) {
    if (errorMsg !== null) {
      showError(fieldName, errorMsg);
    } else {
      clearError(fieldName);
    }
  }

  const isValid = Object.values(errors).every((e) => e === null);

  if (isValid){
    console.log("Form is Valid! Submitting Now!");
  }
});
