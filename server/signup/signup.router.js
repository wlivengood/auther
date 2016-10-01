var express = require('express');
var User = require('../api/users/user.model.js');

var router = express.Router();

module.exports = router;

router.post('/', function (req, res, next) {
  console.log(req.body);
  User.create({ req.body })
  .then(function (user) {
    if (user) {
    	res.sendStatus(201)
	}
	else
		res.sendStatus(400);
  })
  .catch(next);
});