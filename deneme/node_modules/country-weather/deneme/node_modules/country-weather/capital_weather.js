const axios = require("axios");

const apiKey = "def34436108daebb6b1a598568f51af7";

function findCapitalWeather(ulke) {
  axios.get(`https://restcountries.com/v2/name/${ulke}`).then((res) => {
    const ulke = res.data[0];
    const baskent = ulke.capital;
    const enlem = ulke.latlng[0];
    const boylam = ulke.latlng[1];

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${baskent}&appid=${apiKey}&lang=tr&units=metric`).then((res) => {
      console.log(`Başkent ${baskent} bugün hava ${res.data.weather[0].description} sıcaklık ${res.data.main.temp}`);
    });
  });
}

module.exports=findCapitalWeather;