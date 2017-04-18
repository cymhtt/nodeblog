var express = require('express');
var router = express.Router();

/* GET users listing. */
//注册
router.get('/reg', function(req, res, next) {
  res.send('index',{title:'注册'});
});
//登录
router.get('/login', function(req, res, next) {
  res.send('index',{title:'登录'});
});
//退出
router.get('/loginout', function(req, res, next) {
  res.send('index',{title:'退出'});
});
module.exports = router;
