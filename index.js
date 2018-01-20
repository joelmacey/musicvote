'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'});
console.log("Beginning Function");

exports.handler = (event, context, callback) => {
console.log("Inside Handler");
for(var i=1; i<11; i++){

  var params = {
    Item: {
      date: Date.now(),
      artist: eval("event.vote"+ i + "artist"),
      song: eval("event.vote"+ i + "song")
    },
    TableName: 'musicvote'
  };
  docClient.put(params, function(err, data){
    if(err){
      callback(err, null);
    } else{
      callback(null, data);
    }
  });
}

};