const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const connectDB = require("./utils/dbConnect");

// database connection
connectDB;

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.green.bold);
});
