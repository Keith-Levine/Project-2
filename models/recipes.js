const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img: String,
    ingredients:  { type: String, required: true },
    instructions:  { type: String, required: true }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
