const Beers = require('./models/beers.js');
const BeersListView = require('./views/beers_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const beersListView = new BeersListView();
  beersListView.bindEvents();

  const beers = new Beers;
  beers.getData();
})
