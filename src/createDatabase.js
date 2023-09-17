// Import necessary modules and configuration
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const subscriberModel = require("./models/subscribers"); // Import your subscriber model
const data = require("./data"); // Import data to seed the database
const dotenv = require("dotenv"); // Import dotenv for managing environment variables

// Load environment variables from .env file
dotenv.config();

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URI; // Get the database URL from environment variables
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // Connect to MongoDB using Mongoose
const db = mongoose.connection;
db.on("error", (err) => console.log(err)); // Handle database connection errors
db.once("open", () => console.log("Database created...")); // Log a success message once connected

// Define a function to refresh the database
const refreshAll = async () => {
  await subscriberModel.deleteMany({}); // Delete all existing subscriber documents
  await subscriberModel.insertMany(data); // Insert new data to seed the database
  await mongoose.disconnect(); // Disconnect from the database
};

// Call the refreshAll function to perform the data refresh
refreshAll();
