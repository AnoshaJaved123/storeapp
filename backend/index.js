const express = require('express');
const connectToMongo = require('./dbconfig');
var cors = require('cors');
const dotenv = require('dotenv')

connectToMongo();


const app = express();
app.use(cors());

const PORT = process.env.DATABASE || 5000

app.use(express.json())





// Available Routes
// app.use('/api/auths', require('./routes/auths'));
// app.use('/api/notes', require('./routes/notes') );
app.use('/api/itemAuth', require('./Routes/itemAuth'));
app.use('/api/todoAuth', require('./Routes/todoAuth'));
app.use('/api/userAuth', require('./Routes/userAuth'))






app.listen(PORT, ()=>{
    console.log(`app is listining on port ${PORT}`);
})