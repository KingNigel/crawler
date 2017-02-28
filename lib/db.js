var MongoClient = require('mongodb').MongoClient,
    test = require('assert');
// Connection url
var url = 'mongodb://root:87112487@114.215.138.33/admin';
// Connect using MongoClient
module.exports=function(cb){
MongoClient.connect(url, {
    server: {
        poolSize: 20,
        socketOpations: { connectTimeoutMS: 500 },
        auto_reconnect: true
    }
}, function (err, db) {
   // console.log(err);
    cb(db);
   // var col = db.collection('createIndexExample1');

});
}