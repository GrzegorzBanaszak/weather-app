import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/locationHistoryWeather.json";
import currentLocationData from "../../data/weatherOnLocation.json";
import DetailWeatherState from "../../interfaces/DetailWeatherState";

const initialState: DetailWeatherState = {
  cityName: currentLocationData.name,
  coordinate: {
    lat: currentLocationData.coord.lat,
    lon: currentLocationData.coord.lon,
  },
  currentWeather: {
    temp: currentLocationData.main.temp,
    pressure: currentLocationData.main.pressure,
    humidity: currentLocationData.main.humidity,
    weatherDescription: currentLocationData.weather[0].description,
    weatherIcon: currentLocationData.weather[0].icon,
    clouds: currentLocationData.clouds.all,
    windSpeed: currentLocationData.wind.speed,
    windDeg: currentLocationData.wind.deg,
    pop: 0,
  },
  forecast: data.list.map((item) => ({
    date: item.dt,
    weather: {
      temp: item.main.temp,
      pressure: item.main.pressure,
      humidity: item.main.humidity,
      weatherDescription: item.weather[0].description,
      weatherIcon: item.weather[0].icon,
      clouds: item.clouds.all,
      windSpeed: item.wind.speed,
      windDeg: item.wind.deg,
      pop: item.pop,
    },
  })),
};

export const detailWeatherSlice = createSlice({
  name: "detailWeather",
  initialState,
  reducers: {},
});

export const {} = detailWeatherSlice.actions;
export default detailWeatherSlice.reducer;
