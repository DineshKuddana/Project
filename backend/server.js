const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


//App Initialisation

const app = express();
const port = 5000;


//Middleware

app.use(express.json());
app.use(cors());



//Database connection

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.error("Error in connecting DB", e));


  app.get('/get-data' , async(req,res) =>{
    res.send('Hello world')
  })


app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
