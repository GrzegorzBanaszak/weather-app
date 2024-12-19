import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/weatherOnLocation.json";
import LocationWeatherState from "../../interfaces/LocationWeatherState";

const initialState: LocationWeatherState = {
  cityName: data.name,
  country: data.sys.country,
  coordinates: {
    lon: data.coord.lon,
    lat: data.coord.lat,
  },
  weather: {
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
  },
  clouds: {
    main: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    all: data.clouds.all,
  },
  wind: {
    speed: data.wind.speed,
    deg: data.wind.deg,
    gust: data.wind.gust,
  },
};

export const locationWeatherSclice = createSlice({
  name: "locationWeather",
  initialState,
  reducers: {},
});

export const {} = locationWeatherSclice.actions;
export default locationWeatherSclice.reducer;
