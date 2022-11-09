// main JS file
//If statements for everything
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

//get field name for error message
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// CHeck for valid email
const checkEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value)) {
    return showError(email, `Please enter a valid email`);
  }
  showSuccess(email);
};

//check to make sure required input is present
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (!input.value.trim()) {
      return showError(input, `${getFieldName(input)} is required`);
    }
    showSuccess(input);
  });
};

// check minimum length of username and password
const checkLength = (input, min, max) => {
  if (input.value.length < min || input.value.length > max) {
    return showError(
      input,
      `${getFieldName(input)} must be between ${min}-${max} characters`
    );
  }
  showSuccess(input);
};

//check password complexity
const checkPassword = (password) => {
  // const re = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[!@#$%^&*]+)$/
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,20})/;
  if (!re.test(password.value)) {
    return showError(
      password,
      "Must contain: uppercase, lowercase, number, special and be 6-20 characters long"
    );
  }
  showSuccess(password);
};

// match passwords
const matchPasswords = (password, password2) => {
  if (password.value !== password2.value) {
    return showError(password2, "Passwords do not match");
  }
  showSuccess(password2);
};

//Add Event Listener to for msubmit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkPassword(password);

  checkEmail(email);
  matchPasswords(password, password2);

  // Simple conditional validation. Not good clean practice

  // if (!username.value) {
  //   showError(username, "Please fill in the Username");
  // } else {
  //   showSuccess(username);
  // }

  // if (!email.value) {
  //   showError(email, "Please enter an email");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Please enter a valid email");
  // } else {
  //   showSuccess(email);
  // }

  // if (!password.value) {
  //   showError(password, "Please a password between 2-10 characters");
  // } else {
  //   showSuccess(password);
  // }

  // if (!password2.value) {
  //   showError(password2, "Password confirmation required");
  // } else {
  //   showSuccess(password2);
  // }
});
