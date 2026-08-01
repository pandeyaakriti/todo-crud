//repository/todo.repository.js
const Todo= require("../models/todo.model");
const getAllTodos = async () => {
    console.log("getalltodos called from repository");
    return await Todo.find();
};
const createTodo = async (todoData) => {   
    const todo = new Todo(todoData);
    return await todo.save();
};
const updateTodo = async (id, updates) => {
    return await Todo.findByIdAndUpdate(id, updates, { new: true });
};

const deleteTodo = async (id) => {             
    return await Todo.findByIdAndDelete(id);
};
module.exports = {getAllTodos, createTodo, updateTodo, deleteTodo};