var Product = require('../models/Product');

function seed() {
  Product.model.find(function(err, products) {
    if (products.length === 0) {
      console.log('Seeding Products table.');

      return Product.populate();
    }
  });
}

module.exports = seed;