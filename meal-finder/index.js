const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const meals = document.getElementById("meals");
const result = document.getElementById("result-heading");
const single = document.getElementById("single-meal");

// searhc meal and fetch from api
const searchMeal = (e) => {
  e.preventDefault();

  //  clear single meal
  single.innerHTML = "";

  // get search term
  const term = search.value;

  console.log("term :>> ", term);
};

// event listeners
submit.addEventListener("submit", searchMeal);
