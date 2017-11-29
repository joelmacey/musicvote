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
    'ID' : {N: '001'},
    'Song' : {S: 'Joel Macey'},
  }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'www')));
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});

app.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({
			vote1: req.body.vote1 || null,
			vote2: req.body.vote2 || null,
			vote3: req.body.vote3 || null,
			vote4: req.body.vote4 || null,
			vote5: req.body.vote5 || null,
			vote6: req.body.vote6 || null,
			vote7: req.body.vote7 || null,
			vote8: req.body.vote8 || null,
			vote9: req.body.vote9 || null,
			vote10: req.body.vote10 || null
		}));
	console.log('you posted: Vote 1: ' + req.body.vote1 + ', Vote 2: ' + req.body.vote2 + ', Vote 3: ' + req.body.vote3 + ', Vote 4: ' + req.body.vote4 + ', Vote 5: ' + req.body.vote5 + ', Vote 6: ' + req.body.vote6 + ', Vote 7: ' + req.body.vote7 + ', Vote 8: ' + req.body.vote8 + ', Vote 9: ' + req.body.vote9 + ', Vote 10: ' + req.body.vote10);
});

// Putting it in a DB
// ddb.putItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });