const Beers = require('./models/beers.js');
const BeersListView = require('./views/beers_list_view.js')
// const BeerView = require('./views/beer_view.js')
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#food-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const beersListView = new BeersListView();
  beersListView.bindEvents();

  const beers = new Beers;
  beers.bindEvents();
  beers.getData();
})
