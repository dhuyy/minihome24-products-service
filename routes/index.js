var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(JSON.stringify({ service: 'Products' }));
});

module.exports = router;
