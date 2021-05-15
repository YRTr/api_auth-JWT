const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to mongoDB....'))
    .catch(() => console.error('Unable to connect to the database!'))



app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Listening to the port: ${port}`);
})