//init storage
const storage = new Storage();

//get store location data
const weatherLocation = storage.getLocationData();
//initialize weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//init ui
const ui = new UI();

// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  //change location
  weather.changeLocation(city, state);

  // set Locatio in local storage
  storage.setLocationData(city, state);

  //get and display weather
  getWeather();

  //close modal
  const closeModal = () => {
    const modal = document.getElementById("locModal");
    const backdrop = document.getElementsByClassName("modal-backdrop");
    modal.classList.remove("show");
    for (const el in backdrop) {
      if (backdrop[el].classList) {
        backdrop[el].classList.remove("show");
      }
    }
  };

  closeModal();
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log("results :>> ", results);
      ui.paint(results);
    })
    .catch((err) => console.log("err :>> ", err));
}
