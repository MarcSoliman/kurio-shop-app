const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require("bcrypt");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./user");

require("dotenv").config();
const app = express();
//--------------------------------------------------------------END OF IMPORTS------------------------------------------------

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
//--------------------------------------------------------------END OF MIDDLEWARE------------------------------------------------

const uri =
  "mongodb+srv://MarcSoli:" +
  process.env.DB_PASS +
  "@cluster0.fdbtfxm.mongodb.net/kurioDB?retryWrites=true&w=majority";
//connect to database
mongoose.connect(uri, {
  useNewUrlParser: true,
});

//Mongoose Schemas
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
//--------------------------------------------------------------END OF SCHEMAS------------------------------------------------
//Routes
app.get("/api", (req, res) => {
  res.json({ products: productNames });
});

app.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user);
});
//--------------------------------------------------------------END OF ROUTES------------------------------------------------
//Start Server
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
