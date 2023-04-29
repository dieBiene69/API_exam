var express = require("express"),
  router = express.Router(),
  {
    saveValues,
  } = require("../controllers/Values.js");

router.post('/Values', saveValues,function (req,res){});
  
module.exports = router;