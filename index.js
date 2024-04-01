require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");

const connectDB = require("./src/db/connectDB");

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json());

// connect to db
connectDB();

app.get("/", (req, res) => {
  res.send("Dochub server is running");
});

app.listen(port, () => {
    console.log("server is running on port: ", port);
})
