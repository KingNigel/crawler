var Crawler = require("crawler");
var client = require("./db");
var getData = require('./question');
var url = new Array();
var c = new Crawler({
    maxConnections: 100,
    forceUTF8: true,
    callback: function (error, res, done) {
        var $ = res.$;
        var question = $("div[id^='question-summary-'] .answered-accepted").parent().parent().parent().find("div h3 a");

        for (var l = 0; l < question.length; l++) {
            if (question.eq(l).attr("href")) {
                url[l] = { url: question.eq(l).attr("href") };
                // console.log(question.eq(l).attr("href"));
                // getData('http://stackoverflow.com'+question.eq(l).attr("href"));
            }
        }
        client(function (db) {
            var col = db.collection('url');
            if (url.length > 0) {
                col.insertMany(url, function (err, r) {
                    console.log(url);
                    db.close();
                    done();
                });
            }
        })
    }
});

module.exports = c;

