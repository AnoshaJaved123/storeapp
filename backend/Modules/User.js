const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const userSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
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
const User =  mongoose.model("user",userSchema);
module.exports =  User;


