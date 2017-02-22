var Crawler = require("crawler");

var question = {};
var answers = {};
var c = new Crawler({
    maxConnections: 100,
    forceUTF8: true,
    callback: function (error, res, done) {
        var $ = res.$;
        question.title = $("#question-header h1 a").text();
        question.context = $("#question .post-text").html();
        answers.context = $("div[id^='answer-'] .post-text").html();
        console.log(answers);
        done();
    }
});

c.queue('http://stackoverflow.com/questions/42386263/javascript-update-object-of-array-by-attribute-of-the-object');

