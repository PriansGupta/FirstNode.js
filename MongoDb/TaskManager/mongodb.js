//CRUD

// const mongobd = require("mongodb");
// const MongoClient = mongobd.MongoClient;
// const ObjectID = mongobd.ObjectID;

const {MongoClient,ObjectID}=require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "taskManager";

const id = new ObjectID();
console.log("ID:"+id);
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

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Priyansh",
    //       age: 20,
    //     },
    //     {
    //       name: "Ruhi",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert the document");

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("Tasks").insertMany(
    //   [
    //     {
    //       ToDo: "Practical",
    //       status: false,
    //     },
    //     {
    //       ToDo: "End Sem",
    //       status: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert the document");

    //     console.log(result.ops);
    //   }
    // );

    db.collection('users').findOne({age:20},(error,user)=>{
        if(error)
        return console.log("Unable to fetch")

        console.log(user)
    })
  }
);
