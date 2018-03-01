var express = require('express');
var router = express.Router();
var Product = require('../models/Product');

router.get('/', function(req, res) {
  Product.model.find(function(err, products) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(JSON.stringify(products));
    }
  });
});

router.get('/:id', function(req, res) {
  Product.model.findById(req.params.id, function(err, product) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(JSON.stringify(product));
    }
  });
});

module.exports = router;
