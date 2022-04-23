const { MongoClient, ObjectID } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const database = "taskManager";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }


    const db = client.db(database);

    const updatePromise = db.collection("users").updateOne(
      {
        _id: new ObjectID("623b092890f25d05807dc737"),
      },
      {
        $set: {
          name: "Alexis",
          age: 23,
        },
      }
    );

    updatePromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("Tasks")
      .updateMany(
        {
          status: false,
        },
        {
          $set: {
            status: true,
          },
        }
      )
      .then((result) => {
        console.log("Result: " + result);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }
);
