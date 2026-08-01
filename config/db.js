//config/db.js
const mongoose=require('mongoose');
const dbURI='mongodb://localhost:27017/todo';

mongoose.connect("mongodb://127.0.0.1:27017/todo")
.then(()=>{
    console.log('MongoDB connected');
})
.catch((err)=>{
    console.log(err);
});

module.exports=mongoose;