var Crawler = require("crawler");
var client = require("./db");
var url = new Array();
var c = new Crawler({
    maxConnections: 100,
    forceUTF8: true,
    callback: function (error, res, done) {
        var $ = res.$;

        //var question=$("div[id^='question-summary-'] answered").html();
        var question = $("div[id^='question-summary-'] .answered").parent().parent().parent().find("div h3 a");
        for (var l = 0; l < question.length; l++) {
            if (question.eq(l).attr("href")) {
                url[l] = { url: question.eq(l).attr("href") };
            }
        }
        //console.log(Object.getOwnPropertyNames(question).length);.parent().parent("h3")
        console.log(url);
        client(function (db) {
            var col = db.collection('url');
            col.insertMany(url, function (err, r) {
                console.log(err);
                db.close();

                done();
            });
            //    col.find(function (err, item) {
            //        console.log(item);
            //     db.close();
            //      done();
            // })

        })
        //   var urls = $('#list a').eq(0).text();
        //    console.log(urls)
    }
});

module.exports = c;


// c.queue('http://www.biquku.com/0/330/');