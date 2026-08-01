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
module.exports = {getAllTodos, createTodo};