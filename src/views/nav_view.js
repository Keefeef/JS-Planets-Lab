const PubSub = require('../helpers/pub_sub')

const NavView = function(element) {
  this.navBar = element
};


NavView.prototype.bindEvents = function() {

this.navBar.addEventListener('click', (evt) => {
  const selectedValue = evt.target.id
  console.log(selectedValue);
  PubSub.publish('NavView:planet-selected', selectedValue);
});

};

module.exports = NavView;
