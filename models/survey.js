const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: String,
    ques1: String,
    author: String,

},{
    timestamps: true
});

module.exports = mongoose.model('Survey', surveySchema);

 