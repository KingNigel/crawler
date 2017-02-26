var c=require('./javascript');
for(var i=1;i<100;i++ ){
  c.queue('http://stackoverflow.com/questions/tagged/javascript?page='+i+'&sort=newest&pagesize=15');

}
