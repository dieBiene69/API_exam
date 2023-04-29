var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  values = require("./routes/Values"),
  morgan = require("morgan");

mongoose.set('strictQuery',true);
app.use(morgan("combined"));
const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://mariepannier:2pGbfelSv1gSLsnU@cluster0.z1rjll4.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("connected to database"))
    .catch((error)=>console.error("Error:",error));

app.use(express.json);    
app.use(values);
app.listen(PORT, console.log(`Listening on port ${PORT}`));