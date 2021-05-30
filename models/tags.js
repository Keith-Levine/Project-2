const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
    info: String,
    tags: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],
});

const Tag = mongoose.model('Tag', tagsSchema);

module.exports = Tag;