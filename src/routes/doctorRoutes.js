const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Doctor.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
