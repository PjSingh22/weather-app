/* eslint-disable linebreak-style */
import './styles.css';
const currentWeatherName = document.querySelector('.current-title');
const currentWeatherIcon = document.querySelector('.current-icon');
const currentWeatherTemp = document.querySelector('.current-temp');

async function getWeatherData(city = 'New York') {
  const API = 'bf1b862b454a53f068a32a77640da62e';
  const respone = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}`);
  const data = await respone.json();
  return data;
}

function renderWeather(data) {
  const temp = Math.round(data.main.temp * (9 / 5) - 459.67);
  currentWeatherName.innerHTML = data.name;
  currentWeatherTemp.innerHTML = `${temp}°F`;
}

// add eventlistener to window
window.addEventListener('load', () => {
  getWeatherData('Fremont').then((data) => {
    renderWeather(data);
  });
});

