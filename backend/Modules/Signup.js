const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const signupSchema = new Schema({
   name:{
    type: String,
    required : true

},
email:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true,

},
role:{
    type: String,
    required: true
},
date:{
    type: Date,
    default: Date.now
}
});
const Signup =  mongoose.model("signup",signupSchema);
module.exports =  Signup;


