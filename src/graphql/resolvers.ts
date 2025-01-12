import { data } from "./data";
import { WeatherDetailType } from "@/utils/types/WeatherDetailType";
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
