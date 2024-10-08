require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");

const connectDB = require("./src/db/connectDB");

const doctorRoutes = require("./src/routes/doctorRoutes");
const userRoutes = require("./src/routes/userRoutes");
const appointmentRoutes = require("./src/routes/appointmentRoutes");

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

// doctor routes
app.use("/doctors", doctorRoutes);

// user routes
app.use("/users", userRoutes);

// appointment routes
app.use("/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Dochub server is running");
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
