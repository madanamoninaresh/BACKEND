const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/mdb19');

const postSchema = new mongoose.Schema({
    postdata: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('post', postSchema);