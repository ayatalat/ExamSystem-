var bodyParser = require('body-parser');
var course = require('../models/courses');
var chapter = require('../models/chapters');
var question = require('../models/Questions');
var Sequelize = require('sequelize');
var sequelize = require('../config/connectiondb.js');
var questioncontroller = require('./QuestionController');

var ExamController = {
    showForm: function (req, res) {
        course.findAll().then(courses => {
            chapter.findAll().then(chapters => {
                res.render('exam/formExam', {
                    courses: courses,
                    chapters: chapters
                });

            })
        })

    },
    getChapter: function (req, res) {
        sequelize.query('SELECT id FROM courses WHERE name=?', {
            replacements: [req.params.coursename],
            type: sequelize.QueryTypes.SELECT
        }).then(id => {
            console.log(id);
            result = JSON.parse(JSON.stringify(id));
            console.log(result[0].id);
            sequelize.query('SELECT name FROM chapters WHERE c_id=?', {
                replacements: [result[0].id],
                type: sequelize.QueryTypes.SELECT
            }).then(name => {
                result = JSON.parse(JSON.stringify(name));
                console.log(result);
                res.send(result);
            })
        })
    },
    designExam: function (req, res) {
        console.log(req.body);
        const QuestionsArr = [];
        let newquestion = [];
        let chapterIds = [];
        let AllQuestionsReturn = [];
        //let Numoffristchapter;
        sequelize.query('SELECT id FROM courses WHERE name=?', {
            replacements: [req.body.courseName],
            type: sequelize.QueryTypes.SELECT
        }).then(id => {
            // console.log(id);
            result = JSON.parse(JSON.stringify(id));
            // console.log(result[0].id);
            sequelize.query('SELECT id FROM chapters WHERE c_id=?', {
                replacements: [result[0].id],
                type: sequelize.QueryTypes.SELECT
            }).then(id => {
                chapterIds = JSON.parse(JSON.stringify(id));
                // res.send(chapterIds);
                if (chapterIds.length != 0) {
                    newchapterids = chapterIds.map(function (chapterid) {
                        return chapterid.id
                    })
                    question.findAll({
                        where: {
                            chapter_id: {
                                $or: newchapterids
                            }
                        }
                    }).then(questions => {
                        AllQuestionsReturn = JSON.parse(JSON.stringify(questions));
                        // call method to check
                        resultArr = questioncontroller.testQuestions(AllQuestionsReturn, req);
                        //res.send(resultArr);
                        // for (var i = 0; i < newchapterids.length; i++) {
                        //     Numoffristchapter = resultArr.filter(result => result.chapter_id == newchapterids[i])
                        //     if (Numoffristchapter == req.body.chapterName[0]) {
                        //         console.log(`no of ${newchapterids[i]} equal`);
                        //     }
                        // }
                        res.render('exam/list', {
                            Questions: resultArr
                        });
                    })
                }
            })

        })


    }
}



module.exports = ExamController;
