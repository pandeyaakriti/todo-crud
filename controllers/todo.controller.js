//controllers/todo.controller.js
const todoService = require('../services/todo.service');
const getAllTodos = async (req, res) => {
    try {
        const todos= await todoService.getAllTodos();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    console.log ('getalltodos called from controller');

};

module.exports = { getAllTodos };