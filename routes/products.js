var express = require('express');
var router = express.Router();
var Product = require('../models/Product');

router.get('/', function(req, res, next) {
  Product.model.find(function(err, products) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(JSON.stringify(products));
    }
  });
});

module.exports = router;
