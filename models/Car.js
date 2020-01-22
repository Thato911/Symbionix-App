const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CarSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

module.exports = Car = mongoose.model('Car', CarSchema);



