const mongobd = require("mongodb");
const MongoClient = mongobd.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "taskManager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to Connect to DataBase");
    }

    console.log("Connected");

    const db=client.db(database)
    
    db.collection('users').insertOne({
        name:"Priyansh",
        age:20
    })
  }
);
