var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  values = require("./routes/Values");

mongoose.set('strictQuery',true);

mongoose.connect("mongodb+srv://mariepannier:2pGbfelSv1gSLsnU@cluster0.z1rjll4.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("connected to database"))
    .catch((error)=>console.error("Error:",error));

app.use(express.json);    
app.use(values);
app.listen(3000, '0.0.0.0',() => {
  console.log('server is running on port 3000');
});