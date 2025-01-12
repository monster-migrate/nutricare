import mongoose, { model } from "mongoose";
import { WeatherDetailInterface } from "./interface";
import { WeatherSchema } from "./schema";
export default mongoose.models.Weather ||
  model<WeatherDetailInterface>("Weather", WeatherSchema);
