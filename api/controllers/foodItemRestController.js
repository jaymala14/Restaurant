const FoodRestaurant = require('../models/foodIRModel');


exports.createFoodRestaurant =async function(req, res){  
    const doc = await FoodRestaurant.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
}

exports.updateFoodRestaurant = function(req, res) {
    FoodRestaurant.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, food) {
      if (err)
        res.send(err);
      res.json(food);
    });
};

exports.deleteFoodRestaurant = function(req, res) {
    console.log(req.params.id);
    FoodRestaurant.deleteOne({
       _id: req.params.id
    }, function(err, foodRest) {
        if (err){
            res.send(err);
        }
        else{
            res.json({ message: 'foodItemForRestaurant successfully deleted ' });
        }
    });
};
