var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Use this when in Development
  // const BASE_URL = req.baseUrl;

  // Use this when deploying
  const BASE_URL = req.originalUrl+"api";
  
  res.render('index', { title: 'Express', BASE_URL: BASE_URL});
});

module.exports = router;
