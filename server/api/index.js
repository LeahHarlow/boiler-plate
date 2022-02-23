const router = require('express').Router();

router.use(function (req,res,next){
  const err = new Error('Nope cant find em');
  err.status = 404;
  next(err);
})

module.exports = router;
