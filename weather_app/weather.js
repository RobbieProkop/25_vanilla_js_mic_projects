class Weather {
  constructor(city, state) {
    this.apiKey = "N7VNT66K4JC2N57WEC2T6N2ZS";
    this.city = city;
    this.state = state;
  }

  //fetch weather from API
  async getWeather() {
    // const res = await fetch(`
    // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}?unitGroup=metric&key=${this.apiKey}&contentType=json`);
    const res = await fetch(`
    https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${this.city},${this.state},20170&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=json&key=${this.apiKey}`);

    const resData = await res.json();
    console.log("resData :>> ", resData);

    return Object.entries(resData.locations)[0][1];
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
