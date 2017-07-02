var course = require('../models/courses');
var bodyParser = require('body-parser');

var CourseController = {
    list: function(req, res) {
        course.findAll().then(courses => {
            //console.log(courses);
            res.render('courses/listCourses', {
                courses: courses
            });
        })
    },
    addNewCourse: function(req, res) {
        console.log(req.body.coursename);
        course.create({
            name: req.body.coursename
        }).then(Newcourse => {
            console.log(Newcourse);
            // res.render('courses/listCourses');
            course.findAll().then(courses => {
                //console.log(courses);
                res.render('courses/listCourses', {
                    courses: courses
                });
            })
        }).catch((error) => {
            console.log(error);
        })

    }

}
module.exports = CourseController;
