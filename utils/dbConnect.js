const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log(`Database connected`.yellow.bold);
  })
  .catch(() => {
    console.log(`Database not connected`);
  });

module.exports = connectDB;
