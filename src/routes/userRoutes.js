const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const query = {email: user?.email};
    // check if the user already exists or not
    const existingUser = await User.findOne(query);
    if (existingUser) {
      return res.status(409).send({error: true, message: "User already exists"})
    }
    const result = await User.create(user);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

module.exports = router;
