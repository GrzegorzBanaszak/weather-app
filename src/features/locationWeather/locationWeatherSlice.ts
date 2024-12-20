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
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    weatherDescription: data.weather[0].description,
    weatherIcon: data.weather[0].icon,
    clouds: data.clouds.all,
    windSpeed: data.wind.speed,
    windDeg: data.wind.deg,
    pop: 0,
  },
};

export const locationWeatherSclice = createSlice({
  name: "locationWeather",
  initialState,
  reducers: {},
});

export const {} = locationWeatherSclice.actions;
export default locationWeatherSclice.reducer;
