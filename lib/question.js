var Crawler = require("crawler");
var client = require("./db");
var data = {};
module.exports = function (url) {
    var c = new Crawler({
        maxConnections: 100,
        forceUTF8: true,
        callback: function (error, res, done) {
            var $ = res.$;
            data.qtitle = $("#question-header h1 a").text();
            data.acontext = $("#question .post-text").html();
            data.acontext = $("div[id^='answer-'] .post-text").html();
            data.url=url;
            console.log(data);
            client(function (db) {
                var col = db.collection('answer');
                col.insert(data, function (err, r) {
                    db.close();
                    done();
                });
            })
            done();
        }
    });
    c.queue(url);
}

