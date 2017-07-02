var chapter = require('../models/chapters');
var bodyParser = require('body-parser');

var ChapterController = {
    show: function(req, res) {
        console.log("from controller" + req.params.courseName + req.params.courseId);
        res.render('chapters/showandaddChapter', {
            courseName: req.params.courseName,
            courseId: req.params.courseId
        })
    },
    addChapters: function(req, res) {
        console.log(req.body);
        var chaptersArr = [];
        var chapterObject = {};
        for (var i = 0; i < req.body.NoOfChapters; i++) {
            if (req.body.NoOfChapters == 1) {
                chapterObject = {
                    name: req.body.chapterName,
                    c_id: req.body.courseId
                }
            } else {
                chapterObject = {
                    name: req.body.chapterName[i],
                    c_id: req.body.courseId
                }
            }
            chaptersArr.push(chapterObject);
        }
        console.log(chaptersArr);
        chapter.bulkCreate(chaptersArr).then(() => {
            res.render('chapters/showandaddChapter', {
                message: 'chapter added'
            })

        })
    }
}
module.exports = ChapterController;
