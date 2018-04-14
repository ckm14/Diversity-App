
/* activate localStorage */
var localStore = window.localStorage;

/* surveyQuestion Model (This time, written in "JSON" format to interface more cleanly with Mustache) */
/* This is used to input the questions you would like to ask in your experience sampling questionnaire*/
var surveyQuestions = [
                       /*0*/
                       {
                       variableName: "snooze",
                       questionPrompt: "Are you able to take the survey now?",
                       minResponse: 0,
                       maxResponse: 1,
                       labels: [
                                {label: "No"},
                                {label: "Yes"}
                                ],
                       },
                       
                       /*1*/
                       {
                       variableName: "exposurerace",
                       questionPrompt: "Since your last survey, of all the people you saw, how many appeared to be of a different race/ethnicity than you?",
                       minResponse: 1,
                       maxResponse: 5,
                       
                       labels: [
                                {label: "About 0%"},
                                {label: "About 25%"},
                                {label: "About 50%"},
                                {label: "About 75%"},
                                {label: "About 100%"}
                                ],
                       },
                       
                       /*2*/
                       {
                       variableName: "interactionrace",
                       questionPrompt: "Out of all the people you interacted with since your last survey, approximately how many of those interactions were with those of a different race/ethnicity than you?",
                       minResponse: 0,
                       maxResponse: 5,
                       labels: [
                                {label: "I had no interactions"},
                                {label: "About 0%"},
                                {label: "About 25%"},
                                {label: "About 50%"},
                                {label: "About 75%"},
                                {label: "About 100%"}
                                ],
                       },
                       /*3*/
                       {
                       variableName: "interactionclosefriendrace",
                       questionPrompt: "Thinking about those interactions with someone of a different race/ethnicity, how many of them included close friends?",
                       minResponse: 1,
                       maxResponse: 5,
                       labels: [
                                {label: "About 0%"},
                                {label: "About 25%"},
                                {label: "About 50%"},
                                {label: "About 75%"},
                                {label: "About 100%"}
                                ],
                       },
                       /*4*/
                       {
                       variableName: "exposuresex",
                       questionPrompt: "Since your last survey, of all the people you saw, how many did you perceive/know to be of a different sexual orientation than you?",
                       minResponse: 1,
                       maxResponse: 5,
                       labels: [
                                {label: "About 0%"},
                                {label: "About 25%"},
                                {label: "About 50%"},
                                {label: "About 75%"},
                                {label: "About 100%"}
                                ],
                       },
                       
                       /*5*/
                       {
                       variableName: "interactionsex",
                       questionPrompt: "Of all the people you interacted with since your last survey, approximately how many of them did you perceive/know to be of a different sexual orientation than you?",
                       minResponse: 0,
                       maxResponse: 5,
                       labels: [
                                {label: "I had no interactions today"},
                                {label: "About 0%"},
                                {label: "About 25%"},
                                {label: "About 50%"},
                                {label: "About 75%"},
                                {label: "About 100%"}
                                ],
                       },
                       /*6*/
                       {
                       variableName: "interactionclosefriendsex",
                       questionPrompt: "Thinking about those interactions with someone you perceive/know to be of a different sexual orientation, how many of them included close friends?",
                       minResponse: 1,
                       maxResponse: 5,
                       labels: [
                                {label: "About 0%"},
                                {label: "About 25%"},
                                {label: "About 50%"},
                                {label: "About 75%"},
                                {label: "About 100%"}
                                ],
                       },
                       /*7*/
                       {
                       variableName: "userace",
                       questionPrompt: "Since your last survey, was race mentioned in any of your conversations today?",
                       minResponse: 0,
                       maxResponse: 1,
                       labels: [
                                {label: "No"},
                                {label: "Yes"}
                                ],
                       },
                       /*8*/
                       {
                       variableName: "howmuchrace",
                       questionPrompt: "Since your last survey, about how many conversations did you have that mentioned race?",
                       minResponse: 1,
                       maxResponse: 3,
                       labels: [
                                {label: "1"},
                                {label: "2-3"},
                                {label: "4+"},
                                ],
                       },
                       
                       /*9*/
                       {
                       variableName: "howusedrace",
                       questionPrompt: "Thinking of one instance, how was race used in the conversation?",
                       minResponse: 1,
                       maxResponse: 6,
                       labels: [
                                {label: "To identify someone"},
                                {label: "To talk about their/my background"},
                                {label: "To make a joke"},
                                {label: "To connect to someone"},
                                {label: "To talk about current events"},
                                {label: "Other"}
                                ],
                       },
                       
                       /*10*/
                       {
                       variableName: "howusedracespecify",
                       questionPrompt: "Please specify how race was used in the conversation",
                       },
                       
                       /*11*/
                       {
                       variableName: "comfortablerace",
                       questionPrompt: "Did you feel comfortable talking about race in this conversation?",
                       minResponse: 1,
                       maxResponse: 6,
                       labels: [
                                {label: "Extremely uncomfortable"},
                                {label: "Uncomfortable"},
                                {label: "Somewhat uncomfortable"},
                                {label: "Somewhat comfortable"},
                                {label: "Comfortable"},
                                {label: "Extremely comfortable"}
                                ]
                       },
                       /*12*/
                       {
                       variableName: "usesex",
                       questionPrompt: "Since your last survey, was sexual orientation mentioned in any of your conversations today?",
                       minResponse: 0,
                       maxResponse: 1,
                       labels: [
                                {label: "No"},
                                {label: "Yes"}
                                ]
                       },
                       /*13*/
                       {
                       variableName: "howmuchsex",
                       questionPrompt: "Since your last survey, about how many conversations did you have that mentioned sexual orientation?",
                       minResponse: 1,
                       maxResponse: 3,
                       labels: [
                                {label: "1"},
                                {label: "2-3"},
                                {label: "4+"},
                                ]
                       },
                       
                       
                       /*14*/
                       {
                       variableName: "howusedsex",
                       questionPrompt: "Thinking of one instance, how was sexual orientation used in the conversation?",
                       minResponse: 1,
                       maxResponse: 6,
                       labels: [
                                {label: "To identify someone"},
                                {label: "To talk about their/my background"},
                                {label: "To make a joke"},
                                {label: "To connect to someone"},
                                {label: "To talk about current events"},
                                {label: "Other"}
                                ]
                       },
                       
                       /*15*/
                       {
                       variableName: "howusedsexspecify",
                       questionPrompt: "Please specify how sexual orientation was used in the conversation",
                       },
                       /*16*/
                       {
                       variableName: "comfortablesex",
                       questionPrompt: "Did you feel comfortable talking about sexual orientation in this conversation?",
                       minResponse: 1,
                       maxResponse: 6,
                       labels: [
                                {label: "Extremely uncomfortable"},
                                {label: "Uncomfortable"},
                                {label: "Somewhat uncomfortable"},
                                {label: "Somewhat comfortable"},
                                {label: "Comfortable"},
                                {label: "Extremely comfortable"}
                                ]
                       },
                       
                       ];
var lastPage = [
                {
                message: "Thank you! We will check in again soon!"
                },
                {
                message: "That's cool! I'll notify you again in 10 minutes!"
                }
                ];
var participantSetup = [
                        {variableName: "consent",
                        questionPrompt: "Do you consent to participate in this study?",
                        minResponse: 0,
                        maxResponse: 1,
                        labels: [
                                 {label: "No"},
                                 {label: "Yes"}
                                 ]
                        },
                        {
                        variableName: "participant_id",
                        questionPrompt: "Please enter your 4-5 digit SONA ID:"
                        }
                        ];

/*Populate the view with data from surveyQuestion model*/
// Making mustache templates
var NUMSETUPQS = participantSetup.length;
var questionTmpl = "<p>{{questionPrompt}}</p><ul>{{{buttons}}}</ul>";
var buttonTmpl = "<li><button id='{{id}}' value='{{value}}'>{{label}}</button></li>";
var textTmpl = "<li><textarea cols=50 rows=5 id='{{id}}'></textarea></li><li><button type='submit' value='Enter'>Enter</button></li>";
var lastPageTmpl = "<h3>{{message}}</h3>";
//if you have a response variable that determines which questionnaire branch participant's complete
//This can be a question about whether or not the phenomenon of interest occurred or not
//var comparisonResponse;
//This uniqueKey is for iOS version
//the uniqueKey tags the set of responses from one questionnaire so that the compliance script can determine whether not a participant
//has completed a sufficient number of questionnaires for the day.
//The unique key also helps organize the data when preparing for data analysis
var uniqueKey = new Date().getTime();

var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
bindEvents: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    document.addEventListener("resume", this.onResume, false);
    document.addEventListener("pause", this.onPause, false);
},
    //these functions tell the app what to do at different stages of running
onDeviceReady: function() {
    app.init();
},
    
onResume: function() {app.sampleParticipant();},
    
onPause: function() {app.pauseEvents();},
    
    //Beginning our app functions
    /* The first function is used to specify how the app should display the various questions. You should note which questions
     should be displayed using which formats before customizing this function*/
renderQuestion: function(question_index) {
    //First load the correct question from the JSON database
    var question;
    //change X to the number of questions in the participant setup
    //for example, if there are 8 questions in the participant setup, then X = 9
    if (question_index <= -1) {question = participantSetup[question_index+2];}
    else {question = surveyQuestions[question_index];}
    //Now populate the view for this question, depending on whether it uses buttons or textarea
    /*This next statement is a conditional statement saying that questions that are not equal to this number should be displayed as
     *rating scales (i.e., small numbers at the top of the screen and larger numbers at the bottom of the screen).
     *Thus, question numbers included here should be open-ended questions and descending rating scale items
     replace these numbers with the appropriate question index number*/
    
    if (question_index !== -1 && question_index !== 10 && question_index !==15) {
        question.buttons = "";
        var label_count = 0;
        for (var i = question.minResponse; i <= question.maxResponse; i++) {
            var label = question.labels[label_count++].label;
            question.buttons += Mustache.render(buttonTmpl, {
                                                id: question.variableName+i,
                                                value: i,
                                                label: label
                                                }
                                                );
        }
        $("#question").html(Mustache.render(questionTmpl, question));
        $("#question ul li button").click(function(){ app.recordResponse(this, question_index)});
    }
    //This next conditional statement says that questions that are equal to any of these numbers should be displayed as a descending
    //rating scale (e.g., positive numbers on top; negative numbers on the bottom).
    //    else if (question_index == 20 || question_index == 22 || question_index == 23 ||
    //             question_index == 24 || question_index == 25 || question_index >= 52) {
    //        question.buttons = "";
    //        var label_count = 0;
    //        for (var j = question.maxResponse; j >= question.minResponse; j--) {
    //            var label = question.labels[label_count++].label;
    //            question.buttons += Mustache.render(buttonTmpl, {
    //                                                id: question.variableName+j,
    //                                                value: j,
    //                                                label: label
    //                                                }
    //                                                );
    //        }
    //        $("#question").html(Mustache.render(questionTmpl, question));
    //        $("#question ul li button").click(function(){ app.recordResponse(this, question_index)});
    //    }
    //This final statement says that any other question that does not meet the previous two conditional statements should be
    //displayed as an open-ended question
    else {
        question.buttons = Mustache.render(textTmpl, {id: question.variableName+"1"});
        $("#question").html(Mustache.render(questionTmpl, question));
        $("#question ul li button").click(function(){ app.recordResponse($("textarea"), question_index)});
    }
},
    
renderLastPage: function(pageData, question_index) {
    $("#question").html(Mustache.render(lastPageTmpl, pageData));
    //snooze function logic
    //this conditional statement executes the snooze function when the snooze message is shown
    if ( question_index == 0 ) {
        app.snoozeNotif();
        localStore.snoozed = 1;
    }
    // 	else if (question_index == -1) {
    //     	app.saveDataLastPage();
    //     }
    else {
        app.saveDataLastPage();
    }
},
    
    /* Record User Responses */
recordResponse: function(button, count) {
    //     //Record date (create new date object)
    var datestamp = new Date();
    var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds();
    //     //Record value of text field
    var response, currentQuestion, uniqueRecord;
    //Specify which questions are open-ended, so that the app will record the response as a string
    if (count == -1 || count == 10 || count == 15) {
        response = button.val();
        currentQuestion = button.attr('id').slice(0,-1);
    }
    //     //Record value of clicked button
    else {
        response = button.value;
        //Create a unique identifier for this response
        currentQuestion = button.id.slice(0,-1);
    }
    
    if (count <= -1) {uniqueRecord = currentQuestion;}
    else {uniqueRecord = uniqueKey + "_" + currentQuestion + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds;}
    //     //Save this to local storage
    localStore[uniqueRecord] = response;
    //
    
    
    //		/*Question Logic Statements*/
    //if (count == 0) {comparisonResponse = response;}
    //  //Identify the next question to populate the view
    if (count == -1){app.scheduleNotifs();app.renderLastPage(lastPage[0], count);}
    else if (count == 0 && response == 0) {app.renderLastPage(lastPage[1], count);}
    else if (count == 9 & response ==6) {app.renderQuestion(10);}
    else if (count == 9 && response <6) {app.renderQuestion(11);}
    else if (count == 14 & response ==6) {app.renderQuestion(15);}
    else if (count == 14 & response <6) {app.renderQuestion(16);}
    else if (count == 2 && response ==0) {app.renderQuestion(4);}
    else if (count == 2 && response >0) {app.renderQuestion(3);}
    else if (count == 5 && response ==0) {app.renderQuestion(7);}
    else if (count == 5 && response >0) {app.renderQuestion(6);}
    else if (count == 7 && response ==0) {app.renderQuestion(12);}
    else if (count == 7 && response == 1) {app.renderQuestion(8);}
    else if (count == 12 && response == 1) {app.renderQuestion(13);}
    else if (count == 12 && response == 0) {app.renderLastPage(lastPage[0], count);}
    else if (count == -1 && response == 1) {app.renderLastPage(lastpage[0], count);}
    else if (count < surveyQuestions.length-1) {app.renderQuestion(count+1);}
    //else if (count == -2) {app.renderLastPage(lastPage[0], count);}
    else {app.renderLastPage(lastPage[0], count);};
},
    
    /* Prepare for Resume and Store Data */
    /* Time stamps the current moment to determine how to resume */
pauseEvents: function() {
    localStore.pause_time = new Date().getTime();
    app.saveData();
},
    
    /* Initialize the whole thing */
init: function() {
    //change X to the number of questions in the participant setup
    //for example, if there are 9 questions in the participant setup, then X = -9
    if (!localStore.participant_id) {app.renderQuestion(-2);}
    else {
        app.renderQuestion(0);
    }
    localStore.snoozed = 1;
    
},
    
sampleParticipant: function() {
    var current_moment = new Date();
    var current_time = current_moment.getTime();
    if ((current_time - localStore.pause_time) > 600000 || localStore.snoozed == 1) {
        localStore.snoozed = 1;
        app.renderQuestion(0);
    }
    app.triggeredNotifs();
    app.saveData();
},
    
saveDataLastPage:function() {
    var storage = JSON.stringify(localStore);
    var storage_save=JSON.parse(storage);
    $.ajax({
           type: 'get',
           url: 'https://script.google.com/macros/s/AKfycbzNhsYcr14X6mfg7ZJErnSmMNQ7PTs5LuyEv5kyVDmrblZyVTj4/exec',
           data: storage_save,
           crossDomain: true,
           success: function (result) {
           var pid = localStore.participant_id, snoozed = localStore.snoozed;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.snoozed = snoozed;
           navigator.notification.alert("Data Sent Successfully", function(){}, "", "");
           },
           error: function (request, error) {console.log(error);navigator.notification.alert("Error Sending Data. Please check your Internet Connection.",function(){}, "", "");}
           });
},
saveData:function() {
    var storage = JSON.stringify(localStore);
    var storage_save=JSON.parse(storage);
    $.ajax({
           type: 'get',
           url: 'https://script.google.com/macros/s/AKfycbzNhsYcr14X6mfg7ZJErnSmMNQ7PTs5LuyEv5kyVDmrblZyVTj4/exec',
           data: storage_save,
           crossDomain: true,
           success: function (result) {
           var pid = localStore.participant_id, snoozed = localStore.snoozed;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.snoozed = snoozed;
           //navigator.notification.alert("Data Sent Successfully", function(){}, "", "");
           },
           error: function (request, error) {console.log(error);/*navigator.notification.alert("Error Sending Data. Please relaunch the app when you are connected to the Internet again.",function(){}, "", "");*/}
           });
},
    
    // Local Notifications Javascript
scheduleNotifs:function() {
    var interval1, interval2;
    var a, b;
    var date1, date2;
    var nextDiaryLag1, nextDiaryLag2;
    var startDate = new Date();
    console.log(typeof(startDate));
    var startDay = startDate.getDate();
    var nextDayStart1 = startDate.setHours(12, 0, 0, 0);
    var startDate2 = new Date();
    var startDay2 = startDate2.getDate();
    var nextDayStart2 = startDate.setHours(20, 0, 0, 0);
    console.log(startDate);
    //var nextDayStart2 = startDate.setDate(nextDay1, 12, 0, 0, 0);
    //console.log(nextDayStart1);
    console.log(nextDayStart1);
    console.log(nextDayStart2);
    var day = 86400000;
    var dateObject = new Date();
    var now = dateObject.getTime();
    nextDiaryLag1 = parseInt(nextDayStart1) - parseInt(now);
    nextDiaryLag2 = parseInt(nextDayStart2) - parseInt(now);
    var notifs = [];
    for (i = 0; i < 7; i ++) {
        interval1 = nextDiaryLag1 + day*i
        interval2 = nextDiaryLag2 + day*i
        a = 101+(parseInt(i)*100);
        b = 102+(parseInt(i)*100);
        
        date1 = new Date(now + interval1);
        date2 = new Date (now + interval2);
        
        console.log(date1);
        console.log(date2);
        
        localStore ['notification1_'+ i] = localStore.participant_id + "_" + a + "_" + date1;
        localStore ['notification2_'+ i] = localStore.participant_id + "_" + b + "_" + date2;
        
        notifs.push({id: a, at: date1, text: 'Time for your next Survey!', title: 'Exposure to Diversity'});
        notifs.push({id: b, at: date2, text: 'Time for your next Survey!', title: 'Exposure to Diversity'});
    }
    console.log(notifs);
    cordova.plugins.notification.local.schedule(notifs);
},
    
snoozeNotif:function() {
    var now = new Date().getTime(), snoozeDate = new Date(now + 600*1000);
    var id = '99';
    window.plugin.notification.local.add({
                                         icon: 'ic_launcher',
                                         id: id,
                                         title: 'Diary Survey',
                                         message: 'Please complete survey now!',
                                         autoCancel: true,
                                         date: snoozeDate,
                                         });
}
};
