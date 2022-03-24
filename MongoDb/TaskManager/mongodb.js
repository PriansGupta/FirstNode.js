//CRUD

// const mongobd = require("mongodb");
// const MongoClient = mongobd.MongoClient;
// const ObjectID = mongobd.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "taskManager";

const id = new ObjectID();
console.log("ID:" + id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to Connect to DataBase");
    }

    console.log("Connected");

    const db = client.db(database);

    db.collection("users").findOne({ age: 20 }, (error, user) => {
      if (error) return console.log("UNABLE TO FETCH");

      console.log(user);
    });
  }
);
