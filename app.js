/*jshint node:true*/
var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var request = require('request');

var app = express();

app.use(express.bodyParser());
app.use(express.static(__dirname + '/pub'));

// Find service credentials on bluemix
if (process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var conn = env['mongolab'][0].credentials.uri;
}
else
{
    var conn ={ 'url' : 'mongodb://IbmCloud_95usgrmi_d1mul30q_87a32448:liYjsth8YQxHpTVRbDWRolwam1B1BETY@ds049570.mongolab.com:49570/IbmCloud_95usgrmi_d1mul30q'
              }
}

var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);

// render index page
app.get('/', function(req, res){
	res.render('index');
});

//
//
//
//
// post //
//
//
//
//
app.post('/', function(req, res){
    console.log('POST /');
    var cap = req.body;
    console.log(cap.data);

    // Retrieve
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    console.log(conn.url);
    MongoClient.connect(conn.url, function(err, db) {
      if(!err) {
        console.log("We are connected");
        var collection = db.collection('collection');
          // connect 
//collection.find({value: {$elemMatch : {value: cap.data }} //}).nextObject(function(err, doc) {
      //    console.log(doc);
        //});
          
          
          db.command({text:"collection" , search: cap.data }, function(err, cb){ 
        console.log(cb.results);
          });
          
          
       }
    });
});

// Start server
app.listen(port, host);

console.log('App started on port ' + port);

