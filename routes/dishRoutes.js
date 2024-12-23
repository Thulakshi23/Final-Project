const express = require('express');
const Dish = require('../models/Dish');

const router = express.Router();

// Create Dish
router.post('/', async (req, res) => {
  const newDish = new Dish(req.body);

  try {
    const savedDish = await newDish.save();
    res.status(201).json(savedDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
