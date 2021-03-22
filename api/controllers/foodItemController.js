const FoodItem = require('../models/foodItemsModel');

exports.addFoodItem =async function(req, res){
    
    var newFoodItem = new FoodItem({
        food_item_name:'Chhole Bhature',
        photo:'deg.jpg'
      });
      newFoodItem.save(function(err, food) {
          if(err)
              res.send(err);
          res.json(food);  
      });  

}


exports.updateFoodItem = function(req, res) {
    FoodItem.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, food) {
      if (err)
        res.send(err);
      res.json(food);
    });
};

exports.deleteFoodItem = function(req, res) {
    console.log(req.params.id);
    FoodItem.deleteOne({
       _id: req.params.id
    }, function(err, food) {
        if (err){
            res.send(err);
        }
        else{
            res.json({ message: 'foodItem successfully deleted ' });
        }
    });
};

exports.getAllFoodItems = function(req, res) {
    FoodItem.find({}, function(err, foodItems) {
        if (err)
        res.send(err);
        res.json(foodItems);
    });
};

exports.getFoodItems = function(req, res) {
    FoodItem.findById(req.params.id, function(err, foodItem) {
        if (err)
        res.send(foodItem);
        res.json(foodItem);
    });
};