const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Doctor.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const docName = req.params.name;
    const query = { name: docName };
    const result = await Doctor.findOne(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

module.exports = router;
