const mongoose = require('mongoose');

//foodItems: Id,food_item_name,photo
const foodItemsSchema = mongoose.Schema({
    food_item_name:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('FoodItem', foodItemsSchema);