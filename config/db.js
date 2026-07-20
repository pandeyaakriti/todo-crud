//config/db.js
const mongoose=require('mongoose');
const dbURI='mongodb://localhost:27017/todoapp';

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('MongoDB connected');
})
.catch((err)=>{
    console.log(err);
});

module.exports=mongoose;