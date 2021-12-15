const express=require('express');
const mongoose = require('mongoose');
const todoController=require('./controllers/todoController');

const app=express();
const mongo_db_url="mongodb+srv://GHIBRA:schoolboy@cluster0.h6hva.mongodb.net/todos_db?retryWrites=true&w=majority"




app.get('/todos',todoController.getAllTodos);

app.post('/todos',todoController.insertTodo);
app.put('/todos',todoController.updateTodoById);
app.delete('/todos',todoController.deleteTodoById);


app.listen(4000,function(){
    console.log('Server has started to run in express');
    mongoose.connect(mongo_db_url)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function(error){
        console.log('DB is not connected:',error.message);
    });
});
