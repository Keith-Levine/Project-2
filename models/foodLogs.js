const mongoose = require('mongoose');

const foodLogSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img: String,
    ingredients:  { type: String, required: true },
    instructions:  { type: String, required: true }
}, { timestamps: true }), ;

const FoodLogs = mongoose.model('Log', foodLogSchema);

module.exports = FoodLogs;