const mongobd=require('mongodb')
const MongoClient=mongobd.mongoClient;

const connectionURL="mongodb://127.0.0.1:27017"
const database="taskManager"

MongoClient.connect(connectionURL,{useNewUrlParser:true},()=>{
    
})