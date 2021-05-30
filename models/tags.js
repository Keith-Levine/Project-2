const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    info: String,
    tags: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;