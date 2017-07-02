var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    require('../controllers/ExamController').showForm(req, res);
});

router.get('/select/:coursename', function(req, res, next) {
    //res.send(req.params.coursename);
    require('../controllers/ExamController').getChapter(req, res);
})

router.post('/', function(req, res, next) {
    //   console.log(req.body);
    require('../controllers/ExamController').designExam(req, res);
});
module.exports = router;
