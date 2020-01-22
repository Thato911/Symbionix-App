const express = require('express');
const router = express.Router();

//Item Model
const Car = require('../../models/Car');

// @route GET api/cars
// @desc Get All Cars
// @access Public
router.get('/', (req, res) => {
    Car.find()
        .sort({ date: -1 })
        .then(cars => res.json(cars));
});

// @route POST api/cars
// @desc Create A Post
// @access Public
router.post('/', (req, res) => {
    const newCar = new Car({
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        year: req.body.year
    });

    newCar.save().then(car => res.json(car));
});

// @route DELETE api/cars:id
// @desc Delete A Car
// @access Public
router.delete('/:id', (req, res) => {
    Car.findById(req.params.id)
      .then(car => car.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
});


module.exports = router;