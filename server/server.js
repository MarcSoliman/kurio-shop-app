const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/kurioDB", {
  useNewUrlParser: true,
});

const productsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const Product = mongoose.model("Product", productsSchema);

const usersSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", usersSchema);

// const product = new Product({
//   _id: 1,
//   name: "Facial Lotion",
//   description: "Look confident, look like you.",
//   rating: 5,
// });

// product.save();
let productNames = [];

Product.find((err, products) => {
  if (err) {
    console.log(err);
  } else {
    products.forEach((product) => {
      productNames.push(product.name);
    });
  }
});

app.get("/api", (req, res) => {
  res.json({ products: productNames });
});

// app.post("/api", (req, res) => {                   //testing post requests to mongodb
//   const productName = req.body.name;
//   const product = new Product({
//     _id: 3,
//     name: productName,
//     description: "A custom product",
//     rating: 2,
//   });
//   product.save();
//   console.log(productName);
//   // mongoose.connection.close();
// });
let currentUserID = "";
app.post("/login", (req, res) => {
  const name = req.body.username;
  const pw = req.body.password;

  User.findOne({ username: name }, (err, user) => {
    if (!err) {
      if (user) {
        if (user.password == pw) {
          console.log(user.username);
          currentUserID = user.id;
          res.send(user.username);
        } else {
          console.log("Username or Password do not match!");
        }
      } else {
        console.log("Username or Password do not match!");
      }
    } else {
      console.log("error");
    }
  });
});
app.get("/login", (req, res) => {
  res.json({ loginStatus: false });
});

app.get("/user", (req, res) => {});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
