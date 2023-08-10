const mongoose = require('mongoose');

const schema = mongoose.Schema({
    endYear: Number,
    startYear: Number,
    Intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    impact: String,
    added: Date,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number}
);



// export the model 
module.exports = schema;