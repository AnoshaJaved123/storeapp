const mongoose = require('mongoose')
const mongoURL ="mongodb+srv://Anosha:umerusman12@newcluster.9iuxj.mongodb.net/office";

const connectToMongo = ()=>{
    mongoose.connect(mongoURL,()=>{
        console.log(`mongodb connected successfully`)
    })
}
module.exports= connectToMongo;