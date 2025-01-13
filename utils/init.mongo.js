const mongoose = require("mongoose");
const { data } = require("./data")
const MONGO_ATLAS_URI = process.env.MONGO_URI;

if (!MONGO_ATLAS_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables.");
}

// Define the schema (same as your existing schema)
const weatherSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  generationtime_ms: Number,
  utc_offset_seconds: Number,
  timezone: String,
  timezone_abbreviation: String,
  elevation: Number,
  current_units: {
    time: String,
    interval: String,
    temperature_2m: String,
    apparent_temperature: String,
    is_day: String,
    precipitation: String,
    cloud_cover: String,
    wind_speed_10m: String,
    wind_direction_10m: String,
  },
  current: {
    time: String,
    interval: Number,
    temperature_2m: Number,
    apparent_temperature: Number,
    is_day: Number,
    precipitation: Number,
    cloud_cover: Number,
    wind_speed_10m: Number,
    wind_direction_10m: Number,
  },
});

// Create the model
const Weather = mongoose.model("Weather", weatherSchema);

async function useExistingData() {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(MONGO_ATLAS_URI, {
      dbName: "Weather",
      serverSelectionTimeoutMS: 30000,
    });
    console.log("Connected to MongoDB Atlas.");

    // Insert the data from the imported `data.js`
    const result = await Weather.insertMany(data);
    console.log("Documents inserted successfully:", result);

    // Close the connection
    await mongoose.connection.close();
    console.log("Connection closed.");
  } catch (error) {
    console.error("Error using existing data:", error);
    process.exit(1);
  }
}

// Run the script
useExistingData();