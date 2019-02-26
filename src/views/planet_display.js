const PubSub = require('../helpers/pub_sub')


const PlanetDisplay = function(container) {
  this.container = container;
};

PlanetDisplay.prototype.bindEvents = function(){
 PubSub.subscribe('SolarSystem:selected-planet_detail', (evt) => {
   const planet = evt.detail;
   console.log(planet);
  this.render(planet)


 });
};

PlanetDisplay.prototype.render = function(planet){
  const selectedPlanetDetail = document.createElement('p')

  selectedPlanetDetail.textContent = `The ${planet.name} has ${planet.orbit}`
  // this.container.innerHTML = '';
  this.container.appendChild(selectedPlanetDetail);




};

module.exports = PlanetDisplay;
