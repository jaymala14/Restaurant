const express = require('express');
const foodItemController = require('../controllers/foodItemController');


const router = express.Router();



router
.route('/')
.get(foodItemController.getAllFoodItems)
.post(foodItemController.addFoodItem);

router
.route('/:id')
.get(foodItemController.getFoodItems)
.patch(foodItemController.updateFoodItem)
.delete(foodItemController.deleteFoodItem);

module.exports = router;
