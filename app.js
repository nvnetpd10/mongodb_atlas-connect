require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require('./db/connect');

const PORT = 5000;




app.get("/", (req, res) => {
  res.send("hi . i am live");
});


// middleware or to set router



try {
     connectDB(process.env.MONGO_URL);
}
catch(error){
    console.log(error);
}



app.listen(PORT, () => {
    console.log(`${PORT} yes i am connected`);
  });