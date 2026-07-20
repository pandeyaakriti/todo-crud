//services/todo.service.js
const todoRepository = require('../repository/todo.repository');

const getAllTodos = async () => {
    console.log("get all todos called from service");
    const result = await todoRepository.getAllTodos();
    return result;
};

module.exports = { getAllTodos };