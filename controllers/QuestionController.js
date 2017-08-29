var question = require('../models/Questions');
var course = require('../models/courses');
var chapter = require('../models/chapters');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sequelize = require('../config/connectiondb.js');

var QuestionsController = {
    addQuestions: function(req, res) {
        course.findAll().then((courses) => {
            res.render('questions/add', {
                courses: courses
            });
        }).catch((error) => {
            console.log(error);
        })
    },
    InsertQuestions: function(req, res) {
        console.log(req.body);
        var QuestionObject = {};
        var QuestionsArr = [];
        sequelize.query('SELECT id FROM courses WHERE name=?', {
            replacements: [req.body.selectcourses],
            type: sequelize.QueryTypes.SELECT
        }).then(id => {
            console.log(id);
            result = JSON.parse(JSON.stringify(id));
            console.log(result[0].id);
            sequelize.query('SELECT id FROM chapters WHERE name=?', {
                replacements: [req.body.selectChapters],
                type: sequelize.QueryTypes.SELECT
            }).then(id => {
                result = JSON.parse(JSON.stringify(id));
                console.log(result[0].id);
                for (var i = 0; i < req.body.questionsbody.length; i++) {
                    QuestionObject = {
                        title: req.body.questionsbody[i],
                        type: req.body['type' + i],
                        objective: req.body['objective' + i],
                        chapter_id: result[0].id,
                        answers: {
                            answer1: req.body.answer0[i],
                            answer2: req.body.answer1[i],
                            answer3: req.body.answer2[i],
                            correctanswer: req.body.correctanswer[i]
                        }
                    }
                    console.log(QuestionObject);
                    QuestionsArr.push(QuestionObject);
                    console.log(QuestionsArr);
                }
                question.bulkCreate(QuestionsArr).then(() => {
                    res.render('questions/add', {
                        message: 'Questions insert sucessfully'
                    });
                })
            })
        })
    },
    testQuestions: function(questionsArr, req) {
        let simpleNum = req.body.NoOfSimpleQ
        let dfficultNum = req.body.NoOfDiffcultQ
        let remainNum = req.body.NoOfRemainQ
        let understandNum = req.body.NoOfUnderstandQ
        let creativeNum = req.body.NoOfCreativeQ
        const resultArray = [];
        //console.log(req.body.chapterName[0]);
        // loop array to get type and objective
        // check if the no of question in each chapter == required
        for (var i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i].type == 1 && questionsArr[i].objective == 0) {
                if (simpleNum >= 0 && remainNum >= 0) {
                    resultArray.push(questionsArr[i])
                    simpleNum--;
                    remainNum--;
                }else{
                    break;
                }
            } else if (questionsArr[i].type == 1 && questionsArr[i].objective == 1) {
                if (simpleNum >= 0 && understandNum >= 0) {
                    resultArray.push(questionsArr[i])
                    simpleNum--;
                    understandNum--;
                }else{
                   break;
                }
            } else if (questionsArr[i].type == 1 && questionsArr[i].objective == 2) {
                if (simpleNum >= 0 && creativeNum >= 0) {
                    resultArray.push(questionsArr[i])
                    simpleNum--;
                    creativeNum--;
                }else{
                    break;
                }
            } else if (questionsArr[i].type == 0 && questionsArr[i].objective == 0) {
                if (simpleNum >= 0 && remainNum >= 0) {
                    resultArray.push(questionsArr[i])
                    dfficultNum--;
                    remainNum--;
                }else{
                    break;
                }
            } else if (questionsArr[i].type == 0 && questionsArr[i].objective == 1) {
                if (simpleNum >= 0 && understandNum >= 0) {
                    resultArray.push(questionsArr[i])
                    dfficultNum--;
                    understandNum--;
                }else{
                   break;
                }
            } else if (questionsArr[i].type == 0 && questionsArr[i].objective == 2) {
                if (simpleNum >= 0 && creativeNum >= 0) {
                    resultArray.push(questionsArr[i])
                    dfficultNum--;
                    creativeNum--;
                }else{
                   break;
                }
            }
        }
        return resultArray
    }

}
module.exports = QuestionsController;
