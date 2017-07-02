var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    require('../controllers/CoursesController').list(req, res);
});

router.post('/', function(req, res, next) {
    require('../controllers/CoursesController').addNewCourse(req, res);
})

router.get('/showCourse/:courseName/:courseId', function(req, res, next) {
    //  console.log(req.params.courseName);
    // console.log(req.params.courseId);
    require('../controllers/ChapterController').show(req, res);
})
router.post('/showCourse/:courseName/:courseId', function(req, res, next) {
    //  console.log(req.params.courseName);
    require('../controllers/ChapterController').addChapters(req, res);
})
module.exports = router;
