var express = require('express');
var router = express.Router();

const SurveysController = require('../controllers/surveysController');

router.get('/', SurveysController.index);
router.get('/new', SurveysController.new);
router.get('/:id', SurveysController.show);
router.get('/:id/edit', SurveysController.edit);

router.post('/', SurveysController.create);
router.post('/:id', SurveysController.update);
router.post('/:id/delete', SurveysController.delete);

module.exports = router;