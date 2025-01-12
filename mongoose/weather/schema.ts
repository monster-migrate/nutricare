import { Schema } from "mongoose";
import { WeatherDetailInterface } from "./interface";

export const WeatherSchema = new Schema<WeatherDetailInterface>({
  latitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90,
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180,
  },
  generationtime_ms: {
    type: Number,
    required: true,
  },
  utc_offset_seconds: {
    type: Number,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  timezone_abbreviation: {
    type: String,
    required: true,
  },
  elevation: {
    type: Number,
    required: true,
  },
  current_units: {
    time: { type: String, required: true },
    interval: { type: String, required: true },
    temperature_2m: { type: String, required: true },
    apparent_temperature: { type: String, required: true },
    is_day: { type: String, required: true },
    precipitation: { type: String, required: true },
    cloud_cover: { type: String, required: true },
    wind_speed_10m: { type: String, required: true },
    wind_direction_10m: { type: String, required: true },
  },
  current: {
    time: { type: String, required: true },
    interval: { type: Number, required: true },
    temperature_2m: { type: Number, required: true },
    apparent_temperature: { type: Number, required: true },
    is_day: { type: Number, required: true },
    precipitation: { type: Number, required: true },
    cloud_cover: { type: Number, required: true },
    wind_speed_10m: { type: Number, required: true },
    wind_direction_10m: { type: Number, required: true },
  },
});
