const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function() {
  PubSub.subscribe('NavView:planet-selected', (evt) => {
    const selected = evt.detail;
    this.displayPlanet(selected);
  });
};

SolarSystem.prototype.displayPlanet = function(selected) {
  const findPlanet = this.planets.find(planet => planet.name === selected )
  PubSub.publish('SolarSystem:selected-planet_detail', findPlanet)
};

module.exports = SolarSystem;
