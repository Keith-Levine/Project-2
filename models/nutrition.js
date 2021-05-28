const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
    Date:  { type: String, required: true },
    Meal:  { type: String, required: true }
}, { timestamps: true });

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition;