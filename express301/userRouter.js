const express = require('express');
let router = express.Router();

// instead of app.get(...) to router.get(...)

function validateUser(req, res, next) {
  res.locals.validated = true;
  console.log('validated....');
  next();
}

router.use(validateUser);

router.get('/',(req, res, next) => {
  res.json({
    msg: 'userRouter works'
  })
})

router.get('/find',(req, res, next) => {
  res.json({
    msg: 'userRouter - findUser?'
  })
})

module.exports = router;

