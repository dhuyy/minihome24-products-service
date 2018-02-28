/*
 Note: Generated by Bitnami:
 Configuration file that shows how to use the built in MongoDB database in your project.
 Based on the examples found here: https://github.com/mongodb/node-mongodb-native

 If you want to use an ODM instead of barebone Node connections, you can install Mongoose
 https://www.npmjs.com/package/mongoose
*/

if (process.env.NODE_ENV !== 'test') {
  var MongoClient = require('mongodb').MongoClient
      , assert = require('assert');

// Connection URL configured in your docker-compose.yml file
  var url = process.env.DATABASE_URL;

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to MongoDB server");
    db.close();
  });
}
