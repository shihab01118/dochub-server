const express = require("express");
const User = require("../models/User");
const router = express.Router();

// create a new user
router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const query = { email: user?.email };
    // check if the user already exists or not
    const existingUser = await User.findOne(query);
    if (existingUser) {
      return res.send({ message: "User already exists" });
    }
    const result = await User.create(user);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

// get user by email
router.get("/:email", async (req, res) => {
  const email = req.params.email
  const query = { email: email };
  try {
    const matchedUser = await User.findOne(query);
    if (matchedUser) {
      res.status(200).send(matchedUser);
    } else {
      res.status(404).send({ error: true, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

module.exports = router;
