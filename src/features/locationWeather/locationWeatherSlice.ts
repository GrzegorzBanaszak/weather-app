import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../data/weatherOnLocation.json";
import LocationWeatherState from "../../interfaces/LocationWeatherState";
import locationWeatherService from "./locationWeatherService";
import Coordinate from "../../interfaces/Coordinate";

export const getWeatherOnLocation = createAsyncThunk(
  "locationWeather/getWeatherOnLocation",
  async (coordinates: Coordinate, thunkAPI) => {
    try {
      return await locationWeatherService.getWeatherOnLocation(
        coordinates.lat,
        coordinates.lon
      );
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState: LocationWeatherState = {
  coordinates: {
    lon: data.coord.lon,
    lat: data.coord.lat,
  },
  weather: {
    temp: 0,
    pressure: 0,
    humidity: 0,
    weatherDescription: "",
    weatherIcon: "",
    clouds: 0,
    windSpeed: 0,
    windDeg: 0,
    pop: 0,
  },
  isUpdated: false,
};

export const locationWeatherSclice = createSlice({
  name: "locationWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherOnLocation.fulfilled, (state, action) => {
        state.weather = {
          temp: action.payload.main.temp,
          pressure: action.payload.main.pressure,
          humidity: action.payload.main.humidity,
          weatherDescription: action.payload.weather[0].description,
          weatherIcon: action.payload.weather[0].icon,
          clouds: action.payload.clouds.all,
          windSpeed: action.payload.wind.speed,
          windDeg: action.payload.wind.deg,
          pop: 0,
        };
        state.isUpdated = true;
      })
      .addCase(getWeatherOnLocation.rejected, (state) => {
        state.isUpdated = false;
      });
  },
});

export const {} = locationWeatherSclice.actions;
export default locationWeatherSclice.reducer;
