const express = require('express');
const app = express();

require ('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>console.log('mongodb connected')
);


app.use(express.json());
//app.use('/user',require(''))//
app.use('/user', require('./routes/userRoute'));
app.listen(5000,()=> console.log('server is runnig'));