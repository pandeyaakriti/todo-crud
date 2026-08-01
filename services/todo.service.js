//services/todo.service.js
const todoRepository = require('../repository/todo.repository');

const getAllTodos = async () => {
    console.log("get all todos called from service");
    const result = await todoRepository.getAllTodos();
    return result;
};
const createTodo = async (todoData) => {     
    if (!todoData.title || todoData.title.trim() === '') {
        throw new Error('Title is required');
    }
    return await todoRepository.createTodo(todoData);
};

module.exports = { getAllTodos, createTodo };