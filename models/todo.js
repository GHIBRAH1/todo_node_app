const mongoos=require('mongoose');

const todoSchema=mongoos.Schema({
    title:String,
    description: String,
    deadline:Date,
    isCompleted:Boolean
},{timestamp:true});

const todo= mongoose.model('todo');
export default todo;