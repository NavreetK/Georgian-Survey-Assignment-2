// Author: Daaman Kaushal
// Georgian Surveys
var express = require('express');
var router = express.Router();

const AuthorsController = require('../controllers/authorsController');

router.get('/new', AuthorsController.new);

module.exports = router;