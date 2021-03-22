const mongoose = require('mongoose');
const Restaurant = require('../models/restaurantModel');

exports.createRestaurant = function(req, res){
   
    var newRestaurant = new Restaurant({
        restaurant_name:req.body.restaurant_name,
        status:req.body.status,
        photo:req.body.photo,
        opening_time:req.body.opening_time,
        closing_time:req.body.closing_time
    });
    newRestaurant.save(function(err, Restaurant) {
        if(err)
            res.send(err);
        res.json(Restaurant);  
    });  
};

exports.updateRestaurant = function(req, res) {
    Restaurant.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, Restaurant) {
      if (err)
        res.send(err);
      res.json(Restaurant);
    });
};

exports.deleteRestaurant = function(req, res) {
    console.log(req.params.id);
    Restaurant.deleteOne({
       _id: req.params.id
    }, function(err, Restaurant) {
        if (err){
            res.send(err);
        }
        else{
            res.json({ message: 'successfully deleted  Restaurant' });
        }
    });
};

exports.getAllRestaurants = function(req, res) {
    Restaurant.find({}, function(err, restaurants) {
        if (err)
        res.send(err);
        res.json(restaurants);
    });
};

exports.getRestaurant = function(req, res) {
    Restaurant.findById(req.params.id, function(err, Restaurant) {
        if (err)
        res.send(Restaurant);
        res.json(Restaurant);
    });
};