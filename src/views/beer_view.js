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

  const image = document.createElement('img');
  image.src = this.beer.image_url;
  image.alt = `The ${this.beer.name} label design`;
  image.id = 'labelDesign';
  beerContainer.appendChild(image);

  const description = document.createElement('p');
  description.textContent = this.beer.description;
  beerContainer.appendChild(description);

  const foodPairing = document.createElement('ul');
  foodPairing.textContent = `Food pairing ideas`;
  foodPairing.id = 'foodPairingHeader';
  beerContainer.appendChild(foodPairing);

  const fpText = this.beer.food_pairing.toString();
  const fpSplits = fpText.split([',']);
  const fpListItem = fpSplits.forEach((fpSplit) => {
    const fpListItem = document.createElement('li')
    fpListItem.textContent = fpSplit;
    fpListItem.classList = 'food_pairing';
    foodPairing.appendChild(fpListItem);
  });

  // const brewersTips = document.createElement('p');
  // brewersTips.textContent = this.beer.brewers_tips;
  // beerContainer.appendChild(brewersTips);

};

module.exports = BeerView;
