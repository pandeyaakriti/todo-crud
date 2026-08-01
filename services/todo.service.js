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
const updateTodo = async (id, updates) => {      
    const updated = await todoRepository.updateTodo(id, updates);
    if (!updated) {
        throw new Error('Todo not found');
    }
    return updated;
};

const deleteTodo = async (id) => {              
    const deleted = await todoRepository.deleteTodo(id);
    if (!deleted) {
        throw new Error('Todo not found');
    }
    return deleted;
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };