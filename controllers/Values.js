const { application } = require("express");
const Values = require("../models/Values");

exports.saveValues = async (req, res) => {
  console.log(req.body)
  try {
    const valuesInstance = new Values(req.body)
    const saveResult = await valuesInstance.save()
    res.status(201).json(saveResult)
  } catch(error) {
    res.status(500).json(error)
  }
}

exports.getValues = async (req, res) => {
  try {
    const today = new Date();
    const twentyFourHoursAgo = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const allValues = await Values.find({ timestamp: { $gte: twentyFourHoursAgo } });
    res.status(201).json(allValues);
  } catch (error) {
    res.status(500).json(error);
  }
};
