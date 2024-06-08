const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

//middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://ekifrcov:DtLo6vUF0lMrqPF6@backenddb.xt7ozlp.mongodb.net/BackendDB?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`app listen on port 3000`);
    });
    console.log("Connected!");
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});
