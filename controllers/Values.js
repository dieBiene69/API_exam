const { application } = require("express");
const Values = require("../models/Values");

//only the last 24hours!

const today = newDate ();
const twentyFourHoursAgo = newDate(today.getTime() -24 * 60 * 60 * 1000);
const allValues = await Values.find({timestamp: { $gte : twentyFourHoursAgo} });

exports.saveValues = async (req, res) => {
  console.log(req.body)
    try {
        const ValuesInstance = new Values(req.body)
        const saveResult = await ValuesInstance.save()
        res.status(201).json(saveResult)
    } catch(error) {
        res.status(500).json(error)
    }
}
exports.getValues = async (req, res) => {
    try {
      const allValues = await Values.find();
      res.status(201).json(allValues);
    } catch (error) {
      res.status(500).json(error);
    }
  };