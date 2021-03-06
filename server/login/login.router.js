var express = require('express');
var User = require('../api/users/user.model.js');

var router = express.Router();

module.exports = router;

router.post('/', function (req, res, next) {
  console.log(req.body);
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      res.sendStatus(204);
    }
  })
  .catch(next);
});