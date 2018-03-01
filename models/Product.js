var mongoose = require('mongoose');
var productModel = {};

var Product = mongoose.model('Products',
  new mongoose.Schema({
    name: String,
    price: Number,
    picture: String
  })
);

productModel.model = Product;

productModel.populate = function() {
  new Product({
    name: 'Schlafsofa Latina Webstoff',
    price: 480,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/s/c/schlafsofa-latina-webstoff-170-cm-stoff-doran-taupe-4729772.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Polsterhocker Garbo I Webstoff',
    price: 350,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/p/o/polsterhocker-garbo-i-webstoff-eiche-stoff-anda-ii-anthrazit-3931028.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Sideboard Loca II',
    price: 1500,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/s/i/sideboard-loca-ii-wildeiche-teilmassiv-wildeiche-weiss-180-cm-3539925.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Ecksofa Hudson IV Webstoff',
    price: 1200,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/e/c/ecksofa-hudson-iv-webstoff-longchair-ottomane-davorstehend-links-hellgrau-3853644.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Bigsofa Big Cube (4-Sitzer) Webstoff Anthrazit',
    price: 1000,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/b/i/bigsofa-big-cube-4-sitzer-webstoff-anthrazit-ohne-kissen-270-x-129cm-1443318.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Regal Manchester II',
    price: 580,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/r/e/regal-manchester-ii-akazie-massiv-metall-4873112.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'TV-Lowboard Lindholm',
    price: 300,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/t/v/tv-lowboard-lapine-eiche-teilmassiv-matt-weiss-eiche-4092692.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Hochkommode Manchester',
    price: 600,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/h/o/hochkommode-manchester-akazie-massiv-metall-4873496.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Product({
    name: 'Wohnwand Manchester I (3-teilig)',
    price: 1380,
    picture: 'http://cdn1.home24.net/images/media/catalog/product/900x900/png/w/o/wohnwand-manchester-i-3-teilig-akazie-teilmassiv-metall-akazie-anthrazit-4874584.jpg'
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });
};

module.exports = productModel;