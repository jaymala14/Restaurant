const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser =require('body-parser');
const path = require('path');

const app = express();
const PORT = 3020;

const foodItemsRoutes = require('./api/routes/foodItemsRoutes');
const restaurantRoutes = require('./api/routes/restaurantRoutes');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/RestaurantDB");
mongoose.connection.on('connected', () => {
    console.log("mongoDB is connected");
});
mongoose.connection.on('error', () => {
    console.log('error in mongoDB connection');
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/v1/food', foodItemsRoutes);
app.use('/api/v1/restaurant', restaurantRoutes);


app.listen(PORT, () => {
 console.log('App listening to port 3020');
})

