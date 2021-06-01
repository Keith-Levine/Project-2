const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    // info: String,
    tags: {
        type: String,
    },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;