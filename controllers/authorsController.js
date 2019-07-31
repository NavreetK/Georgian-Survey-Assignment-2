//Author: Amarjeet Singh
// Georgian Surveys
const Author = require("../models/author");

exports.create = (req, res) => {
  res.render('authors/new',{
    title: 'New Author'
  });
};

exports.new = (req, res) => {
  res.render('authors/new', {
  });
};

