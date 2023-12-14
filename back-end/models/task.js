const mongoose = require('mongoose');

const TodoType = new mongoose.Schema({
    description: String
});

const TodoModel = mongoose.model("tasks", TodoType);
module.exports = TodoModel;