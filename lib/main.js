var c=require('./javascript');
//88593

// for(let i=60000;i<71000;i++ ){
//      setTimeout(function() {
//         c.queue('http://stackoverflow.com/questions/tagged/javascript?page='+i+'&sort=newest&pagesize=15');
//      }, (i-60000)*500);
// }

let num=1
var si=setInterval(function(){
  if(num==60000){
    clearInterval(si);
  }
  let i=num++;
   c.queue('http://stackoverflow.com/questions/tagged/javascript?page='+i+'&sort=newest&pagesize=15');
},1000)