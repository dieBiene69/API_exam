const { application } = require("express");
const Values = require("../models/Values");

exports.saveValues = async (req, res) => {
  console.log(req.body);
  try {
    const ValuesInstance = new Values(req.body);
    const saveResult = await ValuesInstance.save();
    res.status(201).json(saveResult);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getValues = async (req, res) => {
  try {
    //last 24h
    const today = new Date();
    const twentyFourHoursAgo = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const values24h = await Values.find({
      date: { $gte: twentyFourHoursAgo },
    });
    if (values24h) {
      res.status(201).json(values24h);
    } else {
      res.status(404).json("fehler");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
