const express = require("express");
const router = express.Router()
const { getValues,saveValues} = require("../controllers/Values")

router.post('/Values', saveValues,function (req,res){});
router.get('/Values', getValues,function (req,res){});
  
module.exports = router;