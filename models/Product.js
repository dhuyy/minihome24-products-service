var mongoose = require('mongoose');
var productModel = {};

var Product = mongoose.model('Products',
  new mongoose.Schema({
    name: String
  })
);

productModel.model = Product;

productModel.populate = function() {
  new Product({
    name: 'Boxspringbett Kinx'
  }).save(function(err, product) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Boxspringbett Maum I'
  }).save(function(err, product) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Boxspringbett Loimaa'
  }).save(function(err, product) {
    if (err) console.log('Error occured in populating database');
  });
}

module.exports = productModel;