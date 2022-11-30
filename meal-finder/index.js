const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const meals = document.getElementById("meals");
const result = document.getElementById("result-heading");
const single = document.getElementById("single-meal");
const formContainer = document.getElementById("form-container");

const notify = () => {
  const alert = document.createElement("h2");
  alert.classList.add("error");
  alert.innerHTML = "Please Enter a Search";
  formContainer.parentElement.insertBefore(alert, formContainer);
  setTimeout(() => {
    document.querySelector(".error").remove();
  }, 2000);
};

// searhc meal and fetch from api
const searchMeal = (e) => {
  e.preventDefault();

  //  clear single meal
  single.innerHTML = "";

  // get search term
  const term = search.value;

  // check for empty submit
  if (!term.trim()) {
    notify();
  }

  console.log("term :>> ", term);
};

// event listeners
submit.addEventListener("submit", searchMeal);
