const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const todoSchema = new Schema({
   todo:{
    type: String,
    required : true

},
email:{
    type: String,
    required: true
},
date:{
    type: Date,
    default: Date.now
}
});
const Todo =  mongoose.model("todo",todoSchema);
module.exports =  Todo;


