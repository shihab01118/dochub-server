require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
    console.log(`connected to database ${process.env.DB_NAME} successfully`);
  } catch (error) {
    console.error("error connecting to db: ", process.env.DB_NAME);
  }
};

module.exports = connectDB;
