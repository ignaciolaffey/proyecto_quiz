var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index');
});
router.get('/check', quizController.check);
router.get('/question', quizController.question);
module.exports = router;
