import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DetailWeatherState from "../../interfaces/DetailWeatherState";
import detailWeatherService from "./detaliWeatherService";
import Coordinate from "../../interfaces/Coordinate";

const initialState: DetailWeatherState = {
  cityName: "",
  country: "",
  coordinate: {
    lat: 0,
    lon: 0,
  },
  currentWeather: {
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
  forecast: [],
  isLoaded: false,
};

export const getDetailWeatherAndForecast = createAsyncThunk(
  "detailWeather/getDetailWeatherAndForecast",
  async (coordinates: Coordinate, thunkAPI) => {
    try {
      const locationWeather = await detailWeatherService.getWeatherOnLocation(
        coordinates.lat,
        coordinates.lon
      );
      const forecast = await detailWeatherService.getForecastOnLocation(
        coordinates.lat,
        coordinates.lon
      );

      return { locationWeather, forecast };
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const detailWeatherSlice = createSlice({
  name: "detailWeather",
  initialState,
  reducers: {
    resetLoading: (state) => {
      state.isLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailWeatherAndForecast.fulfilled, (state, action) => {
      state.cityName = action.payload.locationWeather.name;
      state.country = action.payload.locationWeather.sys.country;
      state.coordinate = action.payload.locationWeather.coord;
      state.currentWeather = {
        temp: action.payload.locationWeather.main.temp,
        pressure: action.payload.locationWeather.main.pressure,
        humidity: action.payload.locationWeather.main.humidity,
        weatherDescription:
          action.payload.locationWeather.weather[0].description,
        weatherIcon: action.payload.locationWeather.weather[0].icon,
        clouds: action.payload.locationWeather.clouds.all,
        windSpeed: action.payload.locationWeather.wind.speed,
        windDeg: action.payload.locationWeather.wind.deg,
        pop: 0,
      };
      state.forecast = action.payload.forecast.list.map((item: any) => ({
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
      }));
      state.isLoaded = true;
    });
  },
});

export const { resetLoading } = detailWeatherSlice.actions;
export default detailWeatherSlice.reducer;
