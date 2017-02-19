var Crawler = require("crawler");
var c = new Crawler({
     maxConnections : 100,
     forceUTF8:true,
    callback : function (error, res, done) {
      var $ = res.$;
      var urls = $('#list a').eq(0).text();
       console.log(urls)
       done();
      
    //   current_book.title = $('#maininfo h1').text()
    //   current_book.author = $('#info p').eq(0).text()
    //   current_book.update_time = $('#info p').eq(2).text()
    //   current_book.latest_chapter = $('#info p').eq(3).html()
    //   current_book.intro = $('#intro').html()
    //   current_book.chapters = [];

    //   for(var i = 0; i< urls.length; i++){
    //     var url = urls[i]
        
    //     var _url = $(url).attr('href')+"";
    //     var num = _url.replace('.html','');
    //     var title = $(url).text();


    //     current_book.chapters.push({
    //       num: num,
    //       title: title,
    //       url: _url
    //     })
    //   }
      
    //   console.log(current_book)
    }
});

c.queue('http://www.biquku.com/0/330/');