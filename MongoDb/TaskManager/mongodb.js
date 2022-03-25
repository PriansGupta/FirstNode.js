//CRUD

// const mongobd = require("mongodb");
// 


const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "taskManager";

const id = new ObjectID();
console.log("OBJECT ID:" + id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("UNABLE TO CONNECT TO THE DATABASE");
    }

    console.log("Connected");

    const db = client.db(database);

    db.collection("users").findOne({ age: 20 }, (error, user) => {
      if (error) return console.log("UNABLE TO FETCH");

      console.log(user);
    });
  }
);
