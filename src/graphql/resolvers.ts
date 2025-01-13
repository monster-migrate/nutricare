import { data } from "./data";
import { WeatherDetailInterface } from "../../mongoose/weather/interface";
import { findByLoc } from "../../mongoose/weather/services";

export const resolvers = {
  Query: {
    getWeatherDetails: async (
      _: any,
      { latitude, longitude }: { latitude: number; longitude: number }
    ) => {
      const weatherDetails = await findByLoc({
        latitude: latitude,
        longitude: longitude,
      });
      if (!weatherDetails) {
        throw new Error("Weather details not found for the given coordinates");
      }
      return weatherDetails;
    },
  },
};
