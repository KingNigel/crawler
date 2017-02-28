var c=require('./javascript');
//88593

for(let i=60000;i<71000;i++ ){
     setTimeout(function() {
        c.queue('http://stackoverflow.com/questions/tagged/javascript?page='+i+'&sort=newest&pagesize=15');
     }, (i-60000)*500);
}
