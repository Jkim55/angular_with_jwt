var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
// var User = require('../db/user-queries')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function (req, res, next) {
  // console.log(req.body);
  const token = jwt.sign({}, process.env.JWT_TOKEN, {
    expiresIn: '15 minutes'
  })

  const user = {
    uesrname: req.body.username,
    // password: hash(req.body.password), //todo: make work
    token
  }

  // this is where we do the queries to the db
  // User.create(user)
    // .then(function() {
      res.json({token})
    // })
})

// fucntion hash () {
//   // do bcrypt stuff
// }

module.exports = router;
