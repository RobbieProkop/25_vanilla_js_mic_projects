class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = "Denver";
    this.defaultState = "CO";
  }

  getLocationData() {
    this.city = localStorage.getItem("city");
    this.state = localStorage.getItem("state");

    if (!localStorage.getItem("city") && !localStorage.getItem("state")) {
      this.city = this.defaultCity;
      this.state = this.defaultState;
      // return {
      //   city: this.city,
      //   state: this.state,
      // };
    }
    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}
