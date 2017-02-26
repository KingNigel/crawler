var c=require('./javascript');
for(var i=88000;i<88533;i++ ){
  c.queue('http://stackoverflow.com/questions/tagged/javascript?page='+i+'&sort=newest&pagesize=15');

}
