const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');

const BeersListView = function () {
  this.listElement = document.querySelector('#beer-list');
}

BeersListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-ready', (evt) => {
    this.clearList();
    const data = evt.detail;
    this.createBeers(data);
  })
};

BeersListView.prototype.clearList = function () {
  this.listElement.innerHTML = '';
};

BeersListView.prototype.createBeers = function (allBeers) {
  allBeers.forEach((onebeer) => {
    const beerView = new BeerView(onebeer, this.listElement);
    beerView.render();
  });
};



module.exports = BeersListView;
