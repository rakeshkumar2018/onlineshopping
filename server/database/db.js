var mongo = require('mongodb');

var dbObj = {};

dbObj.getConnection = function (cb) {
  var mongoClient = mongo.MongoClient;
  // var url = 'mongodb+srv://chenchala:chenchala@cluster0-wxjhe.mongodb.net/test?retryWrites=true'
  //  var url='mongo "mongodb+srv://cluster0-qmwlb.mongodb.net/test" --username rakesh' 
  var url='mongodb+srv://rakesh:12345@cluster0-qmwlb.mongodb.net/test?retryWrites=true' 
  mongoClient.connect(url, function (err, client) {
    var dbObj = client.db('onlineshopping');
    cb(dbObj)
  });
}

module.exports = dbObj;