var c=require('./javascript');
//88593

for(var i=76000;i<77000;i++ ){

    c.queue('http://stackoverflow.com/questions/tagged/javascript?page='+i+'&sort=newest&pagesize=15');
}
