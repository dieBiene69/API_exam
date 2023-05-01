var mongoose = require('mongoose');

const ValuesSchema = mongoose.Schema({
    device: {type: String, required: true},
    temp:   {type:Number, required:true},
    hum:    {type:Number, required:true},
    light:  {type:Number, required:true},
    date:   {type: Date, default: Date.now}
});

module.exports = mongoose.model("Values", ValuesSchema);
