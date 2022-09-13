const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title:{
    type:String
  },
  description:{
    type:String,
  }
});

const Todo = mongoose.model("TODO", TodoSchema);


module.exports = Todo;