const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:foods-ready', (evt) => {
    this.populateSelect(evt.detail);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (foods) {
  foods.forEach((food, index) => {
    const option = this.createFoodOption(food, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createFoodOption = function (food, index) {
  const option = document.createElement('option');
  option.textContent = food;
  option.value = index;
  return option;
};

module.exports = SelectView;
