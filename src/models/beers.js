const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beersData = [];
}

Beers.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers')
  requestHelper.get((data) => {
    PubSub.publish('Beers:data-ready', data);
  });
}

module.exports = Beers;
