const express = require('express');
let router = express.Router();


// router.use works the same that app.use does, but it's specific to THIS router.

// instead of app.get(...) to router.get(...)

router.get('/',(req, res, next) => {
  res.json({
    msg: 'router works'
  })
})


// router.all / post / delete / put 

module.exports = router;

