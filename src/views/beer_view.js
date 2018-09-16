const BeerView = function (beer, listElement) {
  this.beer = beer;
  this.listElement = listElement;
}

BeerView.prototype.render = function () {
  const beerContainer = document.createElement('div');
  this.listElement.appendChild(beerContainer);

  const name = document.createElement('h2');
  name.textContent = this.beer.name;
  beerContainer.appendChild(name);

  const tagline = document.createElement('h3')
  tagline.textContent = this.beer.tagline;
  beerContainer.appendChild(tagline);
};

module.exports = BeerView;
