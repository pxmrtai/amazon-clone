const functions = require("firebase-functions");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_API_KEY);

//API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API root
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-acff7/us-central1/api
