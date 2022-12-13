const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const meals = document.getElementById("meals");
const result = document.getElementById("result-heading");
const single = document.getElementById("single-meal");
const formContainer = document.getElementById("form-container");

const notify = (className, message) => {
  const alert = document.createElement("h2");
  alert.classList.add(className);
  alert.innerHTML = message;
  formContainer.parentElement.insertBefore(alert, formContainer);
  setTimeout(() => {
    document.querySelector(`.${className}`).remove();
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
    notify("error", "Please enter a search");
  }
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then((res) => res.json())
    .then((data) => {
      result.innerHTML = `<h2>Search results for ${term}: </h2>`;
      console.log("data.meals :>> ", data.meals);

      if (!data.meals) {
        return (result.innerHTML = `<p>There are no results. Try another keyword.</p>`);
      }
      meals.innerHTML = data.meals
        .map(
          (meal) =>
            `
           <div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal} />
            <div class="meal-info" data-mealID="${meal.idMeal}" >
              <h3>${meal.strMeal}</h3>
            </div
           <div>
          `
        )
        .join("");

      // Clear Search text
      search.value = "";
    })
    .catch((err) => console.log("err >> ", err));
};

// event listeners
submit.addEventListener("submit", searchMeal);
