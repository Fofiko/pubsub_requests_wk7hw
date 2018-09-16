const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beersData = [];
  this.foods = [];
}

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt)  => {
    const foodIndex = evt.detail;
    this.publishBeersByFood(foodIndex);
  })
};

Beers.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers')
  requestHelper.get((data) => {
    PubSub.publish('Beers:data-ready', data);
    this.publishFoods(data);
  });
}

Beers.prototype.publishFoods = function (data) {
  this.beersData = data;
  this.foods = this.foodList();
  PubSub.publish('Beers:foods-ready', this.foods);
}

Beers.prototype.foodList = function () {
  const fullList = this.beersData.map(beer => beer.food_pairing);
  return fullList;
}


Beers.prototype.beersByFood = function (foodIndex) {
  const selectedFood = this.foods[foodIndex];
  return this.beersData.filter((beer) => {
    return beer.food_pairing === selectedFood;
  });
};

Beers.prototype.publishBeersByFood = function (foodIndex) {
  const foundBeers = this.beersByFood(foodIndex);
  PubSub.publish('Beers:data-ready', foundBeers);
};


module.exports = Beers;
