const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/nav_view.js');
const PlanetDisplay = require('./views/planet_display.js');


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

const selectPlanet = document.querySelector('.planets-menu')
const planetMenu = new NavView(selectPlanet);
planetMenu.bindEvents();

const displayPlanet = document.querySelector('.planet-details')
const planetDisplay = new PlanetDisplay(displayPlanet);
planetDisplay.bindEvents();
});
