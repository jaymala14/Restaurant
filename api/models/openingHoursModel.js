const mongoose = require('mongoose');

//restaurantOperatingHours (Here data can be stored multiple times for the same restaurant)
//Id,restuarant_id,start_time,end_time 
const openingHourSchema = mongoose.Schema({
    restaurant_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Restaurant',
        required: true 
    },
    start_time:{
        type:Number,
        required:true
    },
    end_time:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('OpeningHours', openingHourSchema);


                       