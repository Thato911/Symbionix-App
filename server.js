const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const cars = require('./routes/api/cars');



const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//Db Config
const db = require('./config/key.js').mongoURI;

//Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/cars', cars);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));