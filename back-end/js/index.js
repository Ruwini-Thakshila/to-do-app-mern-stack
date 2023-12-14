const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('../models/task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tasks')
app.post('/add', (req, res) =>{
    const task = req.body.task;
    TodoModel.create({
        description: task
    }).then(result => res.json(result))
    .catch(err => res.json(err));
});
app.listen(3001, () =>{
    console.log("Server is running up and down");
})
