const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img: String,
    tags: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    }],
    ingredients:  { type: String, required: true },
    instructions:  { type: String, required: true }
}, { timestamps: true });


const tagSchema = new mongoose.Schema({
    info: String,
    tags: {
        type: String,
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);
const Tag = mongoose.model('Tag', tagSchema);

module.exports = Recipe;
module.exports = Tag;