// Create weather class
class Weather {
  constructor(name, countryCode) {
    this.apiKey = '67e7fbf686bb409288fa000697eed186'
    this.name = name;
    this.countryCode = countryCode;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.name}&country=${this.countryCode}&key=${this.apiKey}
    `);
    
    const responseData = await response.json();

    return responseData;
    }
  } 

  // Create UI class and paint UI
  class UI {
    constructor(){
      this.location = document.getElementById('location');
      this.desc = document.getElementById('desc');
      this.string = document.getElementById('string');
      this.icon = document.getElementById('icon');
    }
  
    paint(weather){
      this.location.textContent = weather.data[0].city_name + ", " + weather.data[0].country_code;
      this.desc.textContent = weather.data[0].weather.description;
      this.string.textContent = weather.data[0].temp + ' C';
      this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`);
       }
  }

  //Assign location to weather class
  const weather = new Weather('Edinburgh', 'GB');
  const ui = new UI();

  //Load getweather 
  document.addEventListener('DOMContentLoaded', getWeather);

  //GetWeather
  function getWeather(){
    weather.getWeather()
      .then(results => {
        ui.paint(results);
      })
      .catch(err => console.log(err));
    }