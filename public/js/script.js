window.onload = function() {
    var courses = document.getElementById("selectCourse");
    var option = document.getElementById("chapterdiv");
    var datatable = document.getElementById("datatable");
    var designBtn = document.getElementById("designBtn");
    var chapterInputDiv = document.getElementById("chapterInputDiv");
    var addChapters = document.getElementById('addChapters');
    var chaptersNames = document.getElementsByClassName('chapterName');
    var addcourse = document.getElementById("addcourse");
    var courseName = document.getElementById("courseName");
    var addQuestions = document.getElementById("addQuestions");


    if (typeof addcourse !== 'undefined' && addcourse !== null) {
        var errorNamecourse = document.getElementById("errorNamecourse");
        addcourse.addEventListener('click', function(event) {
            errorNamecourse.style.display = 'none';
            if (courseName.value != '' && /^[a-zA-Z]+$/.test(courseName.value)) {
                console.log('vaild name');
            } else {
                event.preventDefault();
                errorNamecourse.style.display = 'block';
                errorNamecourse.innerHTML = 'Please Enter a vaild Name';
            }
        })
    }

    if (typeof addQuestions !== 'undefined' && addQuestions !== null) {
        addQuestions.addEventListener('click', function(event) {
            errordivAddQuestions.style.display = 'none';
            var vaildText = document.getElementsByClassName('vaildText');
            console.log(vaildText[0].value);
            for (var i = 0; i < vaildText.length; i++) {
                if (vaildText[i].value != '' && /^[a-zA-Z]+$/.test(vaildText[i].value)) {
                    console.log('vaild')
                    if (!($('input[type=radio]:checked').size() > 0)) {
                        event.preventDefault(event);
                        errordivAddQuestions.style.display = 'block';
                        errordivAddQuestions.innerHTML = 'please check at least one radio in each field Type & objective';
                    }
                } else {
                    event.preventDefault(event);
                    errordivAddQuestions.style.display = 'block';
                    errordivAddQuestions.innerHTML = 'please Enter vaild Data';
                }
            }

        })

    }
    if (typeof $('#NoOfChapters') !== 'undefined' && $('#NoOfChapters') !== null) {
        $('#NoOfChapters').on('input', function(event) {
            var num = parseInt($('#NoOfChapters').val());
            chapterInputDiv.innerHTML = '';
            for (var i = 0; i < num; i++) {
                chapterInputDiv.style.display = 'block';
                chapterInputDiv.innerHTML += '<input class="form-control chapterName" type="text"  placeholder="Enter chapter Name" name="chapterName" ><br><br>';
            }
            addChapters.style.display = "block";
        })
    }
    if (typeof addChapters !== 'undefined' && addChapters !== null) {
        addChapters.addEventListener('click', function(event) {
            for (var i = 0; i < chaptersNames.length; i++) {
                if (chaptersNames[i].value != '') {
                    $('#chaptererror').css('display', 'none');
                    console.log(chaptersNames[i].value);
                } else {
                    event.preventDefault();
                    $('#chaptererror').css('display', 'block');
                    $('#chaptererror').html('please enter all chapters Names')
                }
            }


        })
    }
    if (typeof courses !== 'undefined' && courses !== null) {
        courses.addEventListener("change", function() {
            console.log(courses.value);
            var couresName = courses.value;
            $.ajax({
                url: "/exams/select/" + couresName + "",
                success: function(result) {
                    //console.log(result[0].name);
                    //console.log(result[1].name);
                    if (typeof option !== 'undefined' && option !== null) {
                        option.style.display = 'block';
                        datatable.style.display = 'block';
                        designBtn.style.display = 'block';

                        option.innerHTML = ' ';
                        if (result.length != 0) {
                            for (var i = 0; i < result.length; i++) {
                                console.log(result[i].name);
                                option.innerHTML += '<br><input type="checkbox" name="checkbox" style="font-size:15px;">' + result[i].name + '<br><span>No of Questions:</span><input type="number" name="NumQchapter" min=0 max=12 /><br>';
                            }
                        } else {
                            datatable.style.display = 'none';
                            designBtn.style.display = 'none';
                            option.innerHTML += '<h4>There is no chapters in this course</h4><a class="btn btn-default" href="/courses">go to add chapters</a>';
                        }
                    }
                }
            });
        })
    }
    if (typeof designBtn !== 'undefined' && designBtn !== null) {
        designBtn.addEventListener('click', function(event) {
            var NoOfDiffcultQ = parseInt($("input[name='NoOfDiffcultQ']").val());
            var NoOfSimpleQ = parseInt($("input[name='NoOfSimpleQ']").val());
            var NoOfRemainQ = parseInt($("input[name='NoOfRemainQ']").val());
            var NoOfunderstandQ = parseInt($("input[name='NoOfUnderstandQ']").val());
            var NoOFCreativeQ = parseInt($("input[name='NoOFCreativeQ']").val());
            // console.log(NoOfDiffcultQ+NoOfSimpleQ)
            // console.log(NoOfRemainQ+NoOFCreativeQ+NoOFUnderstandQ);
            if (NoOfDiffcultQ != 0 && NoOfSimpleQ != 0 && NoOfRemainQ != 0 && NoOFUnderstandQ != 0 && NoOFCreativeQ != 0) {
                if ((NoOfDiffcultQ + NoOfSimpleQ) == (NoOfRemainQ + NoOfUnderstandQ + NoOFCreativeQ)) {
                    console.log("move on");
                } else {
                    event.preventDefault();
                    $("#errorDiv").css('display', 'block');
                    $("#errorDiv").text('Diffcult & simple Questions must equal remaining ,understanding and creative questions')
                }
            } else {
                event.preventDefault();
                $("#errorDiv").css('display', 'block');
                $("#errorDiv").text('Please enter all QUestions numbers ')
            }

        });
    }
    var selectCourse = document.getElementById("selectCourse");
    var selectchapterDiv = document.getElementById("selectchapterDiv");
    var selectchapter = document.getElementById("selectchapter");
    var questionstable = document.getElementById("questionstable");

    if (typeof selectCourse !== 'undefined' && selectCourse !== null) {
        selectCourse.addEventListener('change', function() {
            // alert(selectCourse.value);
            if (typeof selectchapter !== 'undefined' && selectchapter !== null) {
                $.ajax({
                    url: "/exams/select/" + selectCourse.value + "",
                    success: function(result) {
                        selectchapter.innerHTML = '';
                        selectchapterDiv.style.display = 'none';
                        $("#errordivAddQuestions").css('display', 'none');
                        if (result.length != 0) {
                            selectchapterDiv.style.display = 'block';
                            for (var i = 0; i < result.length; i++) {
                                console.log(result[i].name);
                                selectchapter.innerHTML += '<option name="chapterName">' + result[i].name + '</option>'
                            }
                        } else {
                            console.log('no chapters');
                            $("#errordivAddQuestions").css('display', 'block');
                            $("#errordivAddQuestions").text('No chapter in this course');



                        }
                    }
                });
            }

        })
    }
}
