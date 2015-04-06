var express = require('express');
var router = express.Router();

// viewsのindex.jadeをレンダリング
router.get('/', function(req, res, next) {
  // titleをテンプレートに渡す
  res.render('index', { title: 'Express' });
});

module.exports = router;
