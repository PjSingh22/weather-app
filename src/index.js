/* eslint-disable linebreak-style */
import './styles.css';

function weatherLayout() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
    <div class="current-weather">
      <h1 class="current-title">Fremont,CA</h1>
      <div class="current-icon-container">
        <img class="current-icon" src="#" alt="weather icon">
      </div>
      <div class="current-temp-container">
        <h2 class="current-temp">22F</h2>
      </div>
    </div>
    `;
  return container;
}

function searchLocation() {
  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar-container');
  searchBar.innerHTML = `
    <input type="text" class="search-bar" placeholder="Search for a city...">
    <button class="search-button">Search</button>
    `;
  return searchBar;
}

function app() {
  return (
    searchLocation(),
    weatherLayout()
  );
}

document.body.appendChild(app());
