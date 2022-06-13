const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const itemSchema = new Schema({
    // _id: new mongoose.Types.ObjectId(),


    item:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
        
    },
    
name:{
    type: String,
    required : true

},
detail:{
    type: String,
    required: true
},
location:{
    type: String,
    required: true,

},
picURL:{
    type: String,
    required: true
},

price:{
    type: Number,
    required: true
},
like:{
    type: Number,
    required : true

},
date:{
    type: Date,
    default: Date.now
}
});
const Item =  mongoose.model("item",itemSchema);
module.exports =  Item;


