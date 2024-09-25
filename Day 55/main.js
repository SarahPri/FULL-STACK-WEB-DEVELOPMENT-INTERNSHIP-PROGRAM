const express = require("express")
const mongodbclient = require("mongodb").MongoClient;
const port = 3000;
const app = express();
const mongourl = 'mongodb://localhost:27017/';




async function start(){
  try {
    await mongodbclient.connect(mongourl)
    console.log('mongodb is connected');
    app.listen(port,()=>{
      console.log('Server is running');
    })
  } 
  catch (err) {
    console.error(err);
    
  }
}
start()


