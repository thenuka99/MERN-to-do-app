const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    task: {
        type: String,
        required:true
    },
    addedOn: {
        type: Date,
    },
    completed: {
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('task', Schema);