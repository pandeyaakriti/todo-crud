//repository/todo.repository.js
const Todo= require("../models/todo.model");
const getAllTodos = async () => {
    console.log("getalltodos called from repository");
    return await Todo.find();
};

module.exports = {getAllTodos};