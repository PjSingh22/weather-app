/* eslint-disable linebreak-style */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function weatherLayout() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
    <div class="search-city-container">
      <label class="search-city-label">Search for a city:
        <input type="text" class="search-city" placeholder="Search for a city...">
      </label>
      <button class="search-city-button btn btn-primary">Search</button>
    </div>
    <div class="weather-container">
      <div class="current-weather">
        <h1 class="current-title">Fremont,CA</h1>
        <div class="current-icon-container">
          <img class="current-icon" src="#" alt="weather icon">
        </div>
        <div class="current-temp-container">
          <h2 class="current-temp">22F</h2>
        </div>
      </div>
    </div>
    `;
  return container;
}

function app() {
  return (
    weatherLayout()
  );
}

document.body.appendChild(app());

// const searchBtn = document.querySelector('.search-city-button');
