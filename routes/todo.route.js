//routes/todo.route.js
const express = require ('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.get('/', todoController.getAllTodos);

module.exports = router;