const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('../models/task');

const app = express();
app.use(cors());
app.use(express.json());
const done = false;
mongoose.connect('mongodb://127.0.0.1:27017/tasks')

app.get('/get', (req, res) =>{
    TodoModel.find()
    .then(tasks =>{
        res.json(tasks);
    }).catch(err => res.json(err));
})

app.post('/add', (req, res) =>{
    const task = req.body.task;
    TodoModel.create({
        description: task
    }).then(result => res.json(result))
    .catch(err => res.json(err));
});

app.put('/update/:id',(req, res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id},{check: true})
    .then(result => res.json(result))
    .catch(err => res.json(err));
} )

app.delete('/delete/:id', (req, res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => console.log(result))
    .catch(err => res.json(err));

})
app.listen(3001, () =>{
    console.log("Server is running up and down");
})
