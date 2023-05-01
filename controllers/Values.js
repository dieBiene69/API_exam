const { application } = require("express");
const Values = require("../models/Values");

exports.saveValues = async (req, res) => {
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