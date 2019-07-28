var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index');
});

// get login page
router.get('/login',(req,res,next)=>{
  res.render('login',{});
});

// get about page
router.get('/about',(req,res,next)=>{
  res.render('about',{});
});

// get surveys page
router.get('/surveys',(req,res,next)=>{
  res.render('surveys',{});
});

// get contact page
router.get('/contact',(req,res,next)=>{
  res.render('contact',{});
});

// get services page
router.get('/services',(req,res,next)=>{
  res.render('services',{});
});

module.exports = router;