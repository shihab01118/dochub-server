const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// post new appointment
router.post("/", async (req, res) => {
  const newAppointment = req.body;
  try {
    const result = await Appointment.create(newAppointment);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

module.exports = router;
