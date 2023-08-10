// import mongoose
const mongoose = require('mongoose');
// import express 
const express = require('express');

// import the model
const schema = require('./Models/schema');

// connect mongodb
mongoose.connect('mongodb+srv://saurabhatalele:Mpslv2023@cluster0.eynpcd3.mongodb.net/data');


// map the model to the onggose connection 
const DataModel = mongoose.model('collection', schema);


// craete an express app 
const app = express();
// use json in app 
app.use(express.json());

// create a get request
app.get('/', async(req, res) => {
    var data = {};
    const relevance = await DataModel.aggregate([
        {
          $group: {
            _id: '$relevance',
            count: { $sum: 1 }
          }
        },
        {
          $sort: { _id: 1 }
        }
      ]);

    const Intensity = await DataModel.aggregate([
        {
            $group: {
                _id: '$intensity',
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);


    const Likelihood = await DataModel.aggregate([
        {
            $group: {
                _id: '$likelihood',
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);

    const Year = await DataModel.aggregate([
        {
            $group: {
                _id: '$year',
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);

    const Country = await DataModel.aggregate([
        {
            $group: {
                _id: '$country',
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);

    const Topics = await DataModel.aggregate([
        {
            $group: {
                _id: '$topics',
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);


    const Region = await DataModel.aggregate([
        {
            $group: {
                _id: '$region',
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);

    const City = await DataModel.aggregate([
        {
            $group: {
                _id: '$city',
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);

    data.city = City;
    data.region = Region;
    data.topics = Topics;
    data.country = Country;
    data.year = Year;
    data.likelihood = Likelihood;
    data.relevance = relevance;
    data.intensity = Intensity;
    res.send(data);
});

// listen the app 

// Intensity
// Likelihood
// Relevance
// Year
// Country
// Topics
// Region
// City 


app.listen(3000, () => {
    console.log('Listening on port 3000');
});