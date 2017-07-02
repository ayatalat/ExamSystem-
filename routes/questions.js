var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
     require('../controllers/QuestionController').addQuestions(req, res);
});


router.post('/',function(req,res,next){
     require('../controllers/QuestionController').InsertQuestions(req, res);
})
module.exports = router;
