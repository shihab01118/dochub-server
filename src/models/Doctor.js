const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const doctorSchema = new Schema({
  name: String,
  img: String,
  title: String,
  degrees: [String],
  contact: {
    phone: String,
    mail: String,
    address: String,
  },
  links: {
    facebook: String,
    instagram: String,
    twitter: String,
  },
  summary: {
    part1: String,
    part2: String,
  },
  education: [
    {
      degree: String,
      year: String,
    },
  ],
  biography: {
    part1: String,
    part2: String,
    part3: String,
  },
  workingHours: [
    {
      days: String,
      hours: String,
    },
  ],
});

const Doctor = model("Doctor", doctorSchema);

module.exports = Doctor;
