class Weather {
  constructor(name, countryCode) {
    this.apiKey = '67e7fbf686bb409288fa000697eed186'
    this.name = name;
    this.countryCode = countryCode;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.name}&country=${this.countryCode}&key=${this.apiKey}
    `);
    

    const responseData = await response.json();

    return responseData;
  }

    changeLocation(name, countryCode){
      this.name = name;
      this.countryCode = countryCode;
    }
  } 