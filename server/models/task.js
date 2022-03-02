const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    task: {
        type: String,
        required:true
    },
    completed: {
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('task', Schema);