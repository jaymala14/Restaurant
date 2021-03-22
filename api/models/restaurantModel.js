const mongoose = require('mongoose');
//restaurant :Id,restuarant_name,status(Active/Inactive/Delete),photo,opening_time,closing_time 

const restaurantSchema = mongoose.Schema({
    restaurant_name: {
        type: String,
        required: true
    },
    status: {
        type:String,
        enum: ['Active', 'Inactive', 'Delete'],
        default: 'Active'
    },
    photo: {
        type:String,
        default: 'exa.png'
    },
    opening_time: {
        type:String,
        required:true
    },
    closing_time: {
        type:String,
        required:true
    }       
});

module.exports = mongoose.model('Restaurant', restaurantSchema)