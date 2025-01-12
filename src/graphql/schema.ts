import gql from "graphql-tag";

export const typeDefs = gql`
  type WeatherDetailType {
    latitude: Float!
    longitude: Float!
    generationtime_ms: Float!
    utc_offset_seconds: Int!
    timezone: String!
    timezone_abbreviation: String!
    elevation: Float!
    current_units: WeatherUnits!
    current: WeatherCurrent!
  }

  type WeatherUnits {
    time: String!
    interval: String!
    temperature_2m: String!
    apparent_temperature: String!
    is_day: Int!
    precipitation: String!
    cloud_cover: String!
    wind_speed_10m: String!
    wind_direction_10m: String!
  }

  type WeatherCurrent {
    time: String!
    interval: Int!
    temperature_2m: Float!
    apparent_temperature: Float!
    is_day: Int!
    precipitation: Float!
    cloud_cover: Float!
    wind_speed_10m: Float!
    wind_direction_10m: Float!
  }

  type Query {
    getWeatherDetails(latitude: Float!, longitude: Float!): WeatherDetailType!
  }
`;
