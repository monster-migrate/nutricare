import mongoose from "mongoose";

const MONGO_ATLAS_URI = process.env.MONGO_URI;

async function dbConnect(): Promise<void> {
  if (!MONGO_ATLAS_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
  }

  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(MONGO_ATLAS_URI, {
      dbName: "Weather",
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 30000,
    });

    console.log("Connected to MongoDB Atlas.");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  }
}

export default dbConnect;

// import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";
// import { storeDocument } from "../mongoose/weather/services";
// import { data } from "../src/graphql/data";
// async function dbConnect(): Promise<any | String> {
//   // const mongoServer = await MongoMemoryServer.create();
//   let MONGO_ATLAS_URI = process.env.MONGO_CONN_STRING;
//   if (!MONGO_ATLAS_URI) {
//     throw new Error("MONGO_URI is not defined in the environment variables.");
//   }
//   async function dbConnect(): Promise<any | string> {
//     await mongoose.disconnect();
//     await mongoose.connect(MONGO_ATLAS_URI as string, {
//       dbName: "Weather",
//       serverSelectionTimeoutMS: 30000,
//       socketTimeoutMS: 30000,
//     });
//   }
//   // await mongoose.disconnect();
//   // let db = await mongoose.connect(MONGOIO_URI, {
//   //   dbName: "Weather",
//   // });
//   console.log("Database connected to", MONGO_ATLAS_URI);
//   try {
//     await storeDocument({
//       latitude: data[0].latitude,
//       longitude: data[0].longitude,
//       generationtime_ms: data[0].generationtime_ms,
//       utc_offset_seconds: data[0].utc_offset_seconds,
//       timezone: data[0].timezone,
//       timezone_abbreviation: data[0].timezone_abbreviation,
//       elevation: data[0].elevation,
//       current_units: {
//         time: data[0].current_units.time,
//         interval: data[0].current_units.interval,
//         temperature_2m: data[0].current_units.temperature_2m,
//         apparent_temperature: data[0].current_units.apparent_temperature,
//         is_day: data[0].current_units.is_day,
//         precipitation: data[0].current_units.precipitation,
//         cloud_cover: data[0].current_units.cloud_cover,
//         wind_speed_10m: data[0].current_units.wind_speed_10m,
//         wind_direction_10m: data[0].current_units.wind_direction_10m,
//       },
//       current: {
//         time: data[0].current.time,
//         interval: data[0].current.interval,
//         temperature_2m: data[0].current.temperature_2m,
//         apparent_temperature: data[0].current.apparent_temperature,
//         is_day: data[0].current.is_day,
//         precipitation: data[0].current.precipitation,
//         cloud_cover: data[0].current.cloud_cover,
//         wind_speed_10m: data[0].current.wind_speed_10m,
//         wind_direction_10m: data[0].current.wind_direction_10m,
//       },
//     });
//     console.log("Document stored successfully.");
//   } catch (error) {
//     console.error("Error storing document:", error);
//   }

//   // await storeDocument({
//   //   latitude: data[1].latitude,
//   //   longitude: data[1].longitude,
//   //   generationtime_ms: data[1].generationtime_ms,
//   //   utc_offset_seconds: data[1].utc_offset_seconds,
//   //   timezone: data[1].timezone,
//   //   timezone_abbreviation: data[1].timezone_abbreviation,
//   //   elevation: data[1].elevation,
//   //   current_units: {
//   //     time: data[1].current_units.time,
//   //     interval: data[1].current_units.interval,
//   //     temperature_2m: data[1].current_units.temperature_2m,
//   //     apparent_temperature: data[1].current_units.apparent_temperature,
//   //     is_day: data[1].current_units.is_day,
//   //     precipitation: data[1].current_units.precipitation,
//   //     cloud_cover: data[1].current_units.cloud_cover,
//   //     wind_speed_10m: data[1].current_units.wind_speed_10m,
//   //     wind_direction_10m: data[1].current_units.wind_direction_10m,
//   //   },
//   //   current: {
//   //     time: data[1].current.time,
//   //     interval: data[1].current.interval,
//   //     temperature_2m: data[1].current.temperature_2m,
//   //     apparent_temperature: data[1].current.apparent_temperature,
//   //     is_day: data[1].current.is_day,
//   //     precipitation: data[1].current.precipitation,
//   //     cloud_cover: data[1].current.cloud_cover,
//   //     wind_speed_10m: data[1].current.wind_speed_10m,
//   //     wind_direction_10m: data[1].current.wind_direction_10m,
//   //   },
//   // });
//   // await storeDocument({
//   //   latitude: data[2].latitude,
//   //   longitude: data[2].longitude,
//   //   generationtime_ms: data[2].generationtime_ms,
//   //   utc_offset_seconds: data[2].utc_offset_seconds,
//   //   timezone: data[2].timezone,
//   //   timezone_abbreviation: data[2].timezone_abbreviation,
//   //   elevation: data[2].elevation,
//   //   current_units: {
//   //     time: data[2].current_units.time,
//   //     interval: data[2].current_units.interval,
//   //     temperature_2m: data[2].current_units.temperature_2m,
//   //     apparent_temperature: data[2].current_units.apparent_temperature,
//   //     is_day: data[2].current_units.is_day,
//   //     precipitation: data[2].current_units.precipitation,
//   //     cloud_cover: data[2].current_units.cloud_cover,
//   //     wind_speed_10m: data[2].current_units.wind_speed_10m,
//   //     wind_direction_10m: data[2].current_units.wind_direction_10m,
//   //   },
//   //   current: {
//   //     time: data[2].current.time,
//   //     interval: data[2].current.interval,
//   //     temperature_2m: data[2].current.temperature_2m,
//   //     apparent_temperature: data[2].current.apparent_temperature,
//   //     is_day: data[2].current.is_day,
//   //     precipitation: data[2].current.precipitation,
//   //     cloud_cover: data[2].current.cloud_cover,
//   //     wind_speed_10m: data[2].current.wind_speed_10m,
//   //     wind_direction_10m: data[2].current.wind_direction_10m,
//   //   },
//   // });
//   // await storeDocument({
//   //   latitude: data[3].latitude,
//   //   longitude: data[3].longitude,
//   //   generationtime_ms: data[3].generationtime_ms,
//   //   utc_offset_seconds: data[3].utc_offset_seconds,
//   //   timezone: data[3].timezone,
//   //   timezone_abbreviation: data[3].timezone_abbreviation,
//   //   elevation: data[3].elevation,
//   //   current_units: {
//   //     time: data[3].current_units.time,
//   //     interval: data[3].current_units.interval,
//   //     temperature_2m: data[3].current_units.temperature_2m,
//   //     apparent_temperature: data[3].current_units.apparent_temperature,
//   //     is_day: data[3].current_units.is_day,
//   //     precipitation: data[3].current_units.precipitation,
//   //     cloud_cover: data[3].current_units.cloud_cover,
//   //     wind_speed_10m: data[3].current_units.wind_speed_10m,
//   //     wind_direction_10m: data[3].current_units.wind_direction_10m,
//   //   },
//   //   current: {
//   //     time: data[3].current.time,
//   //     interval: data[3].current.interval,
//   //     temperature_2m: data[3].current.temperature_2m,
//   //     apparent_temperature: data[3].current.apparent_temperature,
//   //     is_day: data[3].current.is_day,
//   //     precipitation: data[3].current.precipitation,
//   //     cloud_cover: data[3].current.cloud_cover,
//   //     wind_speed_10m: data[3].current.wind_speed_10m,
//   //     wind_direction_10m: data[3].current.wind_direction_10m,
//   //   },
//   // });
//   // await storeDocument({
//   //   latitude: data[4].latitude,
//   //   longitude: data[4].longitude,
//   //   generationtime_ms: data[4].generationtime_ms,
//   //   utc_offset_seconds: data[4].utc_offset_seconds,
//   //   timezone: data[4].timezone,
//   //   timezone_abbreviation: data[4].timezone_abbreviation,
//   //   elevation: data[4].elevation,
//   //   current_units: {
//   //     time: data[4].current_units.time,
//   //     interval: data[4].current_units.interval,
//   //     temperature_2m: data[4].current_units.temperature_2m,
//   //     apparent_temperature: data[4].current_units.apparent_temperature,
//   //     is_day: data[4].current_units.is_day,
//   //     precipitation: data[4].current_units.precipitation,
//   //     cloud_cover: data[4].current_units.cloud_cover,
//   //     wind_speed_10m: data[4].current_units.wind_speed_10m,
//   //     wind_direction_10m: data[4].current_units.wind_direction_10m,
//   //   },
//   //   current: {
//   //     time: data[4].current.time,
//   //     interval: data[4].current.interval,
//   //     temperature_2m: data[4].current.temperature_2m,
//   //     apparent_temperature: data[4].current.apparent_temperature,
//   //     is_day: data[4].current.is_day,
//   //     precipitation: data[4].current.precipitation,
//   //     cloud_cover: data[4].current.cloud_cover,
//   //     wind_speed_10m: data[4].current.wind_speed_10m,
//   //     wind_direction_10m: data[4].current.wind_direction_10m,
//   //   },
//   // });
//   // await storeDocument({
//   //   latitude: data[5].latitude,
//   //   longitude: data[5].longitude,
//   //   generationtime_ms: data[5].generationtime_ms,
//   //   utc_offset_seconds: data[5].utc_offset_seconds,
//   //   timezone: data[5].timezone,
//   //   timezone_abbreviation: data[5].timezone_abbreviation,
//   //   elevation: data[5].elevation,
//   //   current_units: {
//   //     time: data[5].current_units.time,
//   //     interval: data[5].current_units.interval,
//   //     temperature_2m: data[5].current_units.temperature_2m,
//   //     apparent_temperature: data[5].current_units.apparent_temperature,
//   //     is_day: data[5].current_units.is_day,
//   //     precipitation: data[5].current_units.precipitation,
//   //     cloud_cover: data[5].current_units.cloud_cover,
//   //     wind_speed_10m: data[5].current_units.wind_speed_10m,
//   //     wind_direction_10m: data[5].current_units.wind_direction_10m,
//   //   },
//   //   current: {
//   //     time: data[5].current.time,
//   //     interval: data[5].current.interval,
//   //     temperature_2m: data[5].current.temperature_2m,
//   //     apparent_temperature: data[5].current.apparent_temperature,
//   //     is_day: data[5].current.is_day,
//   //     precipitation: data[5].current.precipitation,
//   //     cloud_cover: data[5].current.cloud_cover,
//   //     wind_speed_10m: data[5].current.wind_speed_10m,
//   //     wind_direction_10m: data[5].current.wind_direction_10m,
//   //   },
//   // });
//   // await storeDocument({
//   //   latitude: data[6].latitude,
//   //   longitude: data[6].longitude,
//   //   generationtime_ms: data[6].generationtime_ms,
//   //   utc_offset_seconds: data[6].utc_offset_seconds,
//   //   timezone: data[6].timezone,
//   //   timezone_abbreviation: data[6].timezone_abbreviation,
//   //   elevation: data[6].elevation,
//   //   current_units: {
//   //     time: data[6].current_units.time,
//   //     interval: data[6].current_units.interval,
//   //     temperature_2m: data[6].current_units.temperature_2m,
//   //     apparent_temperature: data[6].current_units.apparent_temperature,
//   //     is_day: data[6].current_units.is_day,
//   //     precipitation: data[6].current_units.precipitation,
//   //     cloud_cover: data[6].current_units.cloud_cover,
//   //     wind_speed_10m: data[6].current_units.wind_speed_10m,
//   //     wind_direction_10m: data[6].current_units.wind_direction_10m,
//   //   },
//   //   current: {
//   //     time: data[6].current.time,
//   //     interval: data[6].current.interval,
//   //     temperature_2m: data[6].current.temperature_2m,
//   //     apparent_temperature: data[6].current.apparent_temperature,
//   //     is_day: data[6].current.is_day,
//   //     precipitation: data[6].current.precipitation,
//   //     cloud_cover: data[6].current.cloud_cover,
//   //     wind_speed_10m: data[6].current.wind_speed_10m,
//   //     wind_direction_10m: data[6].current.wind_direction_10m,
//   //   },
//   // });
//   // return mongoServer;
// }
// export default dbConnect;
