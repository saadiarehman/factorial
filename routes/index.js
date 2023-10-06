var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/get", function(req, res, next) {
  res.send("index");
});

module.exports = router;
