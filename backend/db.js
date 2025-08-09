const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://swastikrpanigrahi:nvmPxMJh6kHKpf9L@0nyx.mdjy9.mongodb.net/raw-todo")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = { todo }