const values = require("../models/Values");

exports.saveValues = async (req, res) => {
    try {
        const valuesInstance = new values(req.body)
        const saveResult = await valuesInstance.save()
        res.status(201).json(saveResult)
    } catch(error) {
        res.status(500).json(error)
    }
}
exports.getValues = async (req, res) => {
    try {
      const allValues = await values.find();
      res.status(201).json(allValues);
    } catch (error) {
      res.status(500).json(error);
    }
  };