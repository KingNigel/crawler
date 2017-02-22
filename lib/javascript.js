var Crawler = require("crawler");
var url=new Array();
var c = new Crawler({
     maxConnections : 100,
     forceUTF8:true,
     callback : function (error, res, done) {
      var $ = res.$;

      //var question=$("div[id^='question-summary-'] answered").html();
      var question=$("div[id^='question-summary-'] .answered").parent().parent().parent().find("div h3 a").eq(0).attr("href");
      //console.log(Object.getOwnPropertyNames(question).length);.parent().parent("h3")
       console.log(question);
    //   var urls = $('#list a').eq(0).text();
    //    console.log(urls)
       done();
    }
});

c.queue('http://stackoverflow.com/questions/tagged/javascript');


// c.queue('http://www.biquku.com/0/330/');