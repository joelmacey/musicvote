var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
path = require("path");
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-southeast-2'});	
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
var params = {
  TableName: 'JoelMaceyMusic',
  Item: {
  	'ID' : {S : 'start'},
    'artist' : {S: 'test1'},
    'song' : {S: 'test1'},

  }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'www')));
app.listen(3000, function () {
  console.log('Server is running at http://localhost:3000');
});
app.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({
			vote1artist: req.body.vote1artist || null,
			vote1song: req.body.vote1song || null,
			vote2artist: req.body.vote2artist || null,
			vote2song: req.body.vote2song || null,
			vote3artist: req.body.vote3artist || null,
			vote3song: req.body.vote3song || null,
			vote4artist: req.body.vote4artist || null,
			vote4song: req.body.vote4song || null,
			vote5artist: req.body.vote5artist || null,
			vote5song: req.body.vote5song || null,
			vote6artist: req.body.vote6artist || null,
			vote6song: req.body.vote6song || null,
			vote7artist: req.body.vote7artist || null,
			vote7song: req.body.vote7song || null,
			vote8artist: req.body.vote8artist || null,
			vote8song: req.body.vote8song || null,
			vote9artist: req.body.vote9artist || null,
			vote9song: req.body.vote9song || null,
			vote10artist: req.body.vote10artist || null,
			vote10song: req.body.vote10song || null
		}));
  	for(var i=1; i<11; i++){
		ddb.putItem({
		    "TableName": "JoelMaceyMusic",
		    "Item": {
		    	"ID": {"S": eval("req.body.vote" + i + "song + req.body.vote" + i + "artist")},
		        "song": {"S": eval("req.body.vote"+ i + "song")},
		        "artist": {"S" : eval("req.body.vote" + i +"artist")}
		    }
		}, function( err, result) {
	    	if (err) {
		    	console.log("Error", err);
			}
		});
		console.log("Success! " + eval("req.body.vote" + i + "song + req.body.vote" + i + "artist"));
	};
});