const BeerView = function (beer, listElement) {
  this.beer = beer;
  this.listElement = listElement;
}

BeerView.prototype.render = function () {
  const beerContainer = document.createElement('div');
  beerContainer.classList = 'oneBeer';
  this.listElement.appendChild(beerContainer);

  const name = document.createElement('h2');
  name.textContent = this.beer.name;
  name.classList = 'name';
  beerContainer.appendChild(name);

  const tagline = document.createElement('h3');
  tagline.textContent = this.beer.tagline;
  tagline.classList = 'tagline';
  beerContainer.appendChild(tagline);

  const food_pairing = document.createElement('ul');
  beerContainer.appendChild(food_pairing);

  const fp_text = this.beer.food_pairing.toString();
  const fp_splits = fp_text.split([',']);

  const fp_listItem = fp_splits.forEach((fp_split) => {
    const fp_listItem = document.createElement('li')
    fp_listItem.textContent = fp_split;
    food_pairing.appendChild(fp_listItem);
  });
};

module.exports = BeerView;
