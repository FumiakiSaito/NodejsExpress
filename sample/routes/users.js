var express = require('express');
var router = express.Router();

// http://fumiaki.org:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// http://fumiaki.org:3000/users/:ユーザー名
router.get('/:name', function(req, res, next) {
    res.send('hello,' + req.params.name);
});

// http://fumiaki.org:3000/users/id/1
// 引数を取って処理する
router.param('id', function(req, res, next, id) {
    var users = ['taro', 'jiro', 'saburo'];
    req.params.name = users[id];
    next();
})
router.get('/id/:id', function(req, res, next) {
    res.send('hello,' + req.params.name);
});


module.exports = router;
