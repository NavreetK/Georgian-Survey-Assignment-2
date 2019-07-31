// Author: Navreet Sidhu and Daaman Kaushal
// Georgian Surveys
const Survey = require ('../models/survey');

exports.index = (req, res) => {
    Survey.find()
        .then(surveys => {
            console.log(surveys)
            res.render('surveys/index', {
                surveys: surveys,
                title: "Survey_1"
            }); 
        })
        .catch(err => {
            console.error(`ERROR: ${err}`);
        });
};

exports.show = (req, res) => {
    res.render('surveys/show', {
        title: 'New Survey'
    });
};

exports.new = (req, res) => {
    res.render('surveys/new', {
        title: 'New Survey'
    });
};

exports.edit = (req, res) => {};

exports.create = (req, res) => {};

exports.delete = (req, res) => {};

exports.update = (req, res) => {};

