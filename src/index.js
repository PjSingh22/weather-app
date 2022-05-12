/* eslint-disable linebreak-style */
import './styles.css';

const currentWeatherName = document.querySelector('.current-title');
const currentWeatherSetting = document.querySelector('.current-setting');
const currentWeatherTemp = document.querySelector('.current-temp');
const windValue = document.querySelector('.wind-value');
const humidityValue = document.querySelector('.humidity-value');
const pressureValue = document.querySelector('.pressure-value');
const feelsLikeValue = document.querySelector('.feels-like-value');

async function getWeatherData(city = 'New York') {
  const API = 'bf1b862b454a53f068a32a77640da62e';
  const respone = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}`);
  const data = await respone.json();
  console.log(data);
  return data;
}

function convertToFahrenheit(temp) {
  return Math.round((temp * 9) / 5 - 459.67);
}

function renderWeather(data) {
  currentWeatherName.innerHTML = data.name;
  currentWeatherSetting.innerHTML = data.weather[0].description;
  currentWeatherTemp.innerHTML = `${convertToFahrenheit(data.main.temp)}°F`;
  windValue.innerHTML = `${Math.round(data.wind.speed)} mph`;
  humidityValue.innerHTML = `${data.main.humidity}%`;
  pressureValue.innerHTML = `${Math.round(data.main.pressure)} mb`;
  feelsLikeValue.innerHTML = `${convertToFahrenheit(data.main.feels_like)}°F`;
}

window.addEventListener('load', () => {
  getWeatherData('Fremont').then((data) => {
    renderWeather(data);
  });
});
