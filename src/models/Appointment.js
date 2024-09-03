const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const appointmentSchema = new Schema({
  patientName: String,
  patientAge: Number,
  patientGender: String,
  patientEmail: String,
  patientPhone: String,
  patientAddress: String,
  dateOfAppointment: Date,
  doctorId: String,
  descriptionOfSickness: String,
  status: {
    default: "pending",
    type: String,
  },
  paymentStatus: {
    default: "unpaid",
    type: String,
  }
});

const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;
