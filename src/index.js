const express = require("express");
const app = require("./app.js"); // Import the Express app from the app.js file
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const dotenv = require("dotenv"); // Import dotenv for managing environment variables

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000; // Define the port for the Express server to listen on

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE using the URL from environment variables
const DATABASE_URL = process.env.DATABASE_URI; // Get the database URL from environment variables
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // Connect to MongoDB using Mongoose
const db = mongoose.connection;
db.on("error", (err) => console.log(err)); // Handle database connection errors
db.once("open", () => console.log("Connected to the database")); // Log a success message once connected

// Start the Express server to listen on the specified port
app.listen(port, () => console.log(`App listening on port ${port}!`));
