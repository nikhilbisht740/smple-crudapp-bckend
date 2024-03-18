const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api server");
});

const password = encodeURIComponent("iam1@bkendapi");

mongoose
  .connect(
    `mongodb+srv://nikhilbisht740:${password}@bkenddb.kvbm9ib.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BKendDb`
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });
