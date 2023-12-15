const mongoose = require('mongoose');

const TodoType = new mongoose.Schema({
    description: String,
    check: {
        type: Boolean,
        default: false
    }
});

const TodoModel = mongoose.model("tasks", TodoType);
module.exports = TodoModel;