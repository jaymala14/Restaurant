const mongoose = require('mongoose');

//foodItemsRestuarant:Id,restuarant_id,food_item_id,price

const FoodIRSchema = mongoose.Schema({
    restuarant_id:{
        type: mongoose.Schema.ObjectId,
        ref:'Restaurant',
        required:true
    },
    food_item_id:{
        type: mongoose.Schema.ObjectId,
        ref:'FoodItem',
        required:true
    },
    price:{
        type: Number,
        require: true
    }
});

mongoose.Schema = mongoose.model('FoodPriceRest', FoodIRSchema);
  