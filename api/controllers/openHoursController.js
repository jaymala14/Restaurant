const OpenHours = require('../models/openingHoursModel');

exports.OpenHours =async function(req, res){  
        const doc = await OpenHours.create(req.body);
    
        res.status(201).json({
          status: 'success',
          data: {
            data: doc
          }
        });
}

exports.getOpenHoursByRestaurant = function(req, res) {
  OpenHours.find({restaurant_id:req.params.restaurant_id}, function(err, OpenHours) {
        if (err)
        res.send(err);
        res.json(OpenHours);
    });
};

