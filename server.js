//server.js
const express=require('express');
const app=express();
require('./config/db');
const todoRoutes=require('./routes/todo.route');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use('/todos',todoRoutes);

app.listen(3001);
console.log ('Server is running on port 3001');