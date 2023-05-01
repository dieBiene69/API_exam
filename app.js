const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

const Values = require("./routes/Values")

app.use(morgan("combined"));
const PORT = process.env.PORT || 8000;


async function main() {
  await mongoose.connect("mongodb+srv://mariepannier:2pGbfelSv1gSLsnU@cluster0.z1rjll4.mongodb.net/?retryWrites=true&w=majority")
  .then(()=>console.log("connected to database"))
  .catch((error)=>console.error("Error:",error));
}


app.use("/",Values);

main()
  .then(() => {
    app.listen(PORT, console.log(`Listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));