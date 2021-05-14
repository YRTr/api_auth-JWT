const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to mongoDB....'))
    .catch(() => console.error('Unable to connect to the database!'))


const authRoute = require('./routes/auth');


app.use(express.json());
app.use('/api/user', authRoute);


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Listening to the port: ${port}`);
})