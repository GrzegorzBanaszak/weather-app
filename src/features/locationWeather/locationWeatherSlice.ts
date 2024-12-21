import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LocationWeatherState from "../../interfaces/LocationWeatherState";
import locationWeatherService from "./locationWeatherService";
import Coordinate from "../../interfaces/Coordinate";

const mostPopularCities = ["warszawa", "krakow", "wroclaw", "poznan", "gdansk"];

const initialState: LocationWeatherState = {
  coordinates: {
    lon: 0,
    lat: 0,
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
  mostPopularCities: [],
  isUpdated: false,
};

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

export const getWeatherOnMostPopularCities = createAsyncThunk(
  "locationWeather/getWeatherOnMostPopularCities",
  async (_, thunkAPI) => {
    try {
      const data: Promise<any>[] = [];

      mostPopularCities.forEach((city) => {
        data.push(locationWeatherService.getWeatherByCityName(city));
      });

      return await Promise.all(data);
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const locationWeatherSclice = createSlice({
  name: "locationWeather",
  initialState,
  reducers: {
    homeLocationChanged(state) {
      state.isUpdated = false;
    },
    clearState(state) {
      state.coordinates = {
        lon: 0,
        lat: 0,
      };
      state.weather = {
        temp: 0,
        pressure: 0,
        humidity: 0,
        weatherDescription: "",
        weatherIcon: "",
        clouds: 0,
        windSpeed: 0,
        windDeg: 0,
        pop: 0,
      };
    },
  },
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
      })
      .addCase(getWeatherOnMostPopularCities.fulfilled, (state, action) => {
        state.mostPopularCities = action.payload.map((city: any) => {
          return {
            name: city.name,
            weather: {
              temp: city.main.temp,
              pressure: city.main.pressure,
              humidity: city.main.humidity,
              weatherDescription: city.weather[0].description,
              weatherIcon: city.weather[0].icon,
              clouds: city.clouds.all,
              windSpeed: city.wind.speed,
              windDeg: city.wind.deg,
              pop: 0,
            },
            coordinate: {
              lat: city.coord.lat,
              lon: city.coord.lon,
            },
          };
        });
      });
  },
});

export const { homeLocationChanged } = locationWeatherSclice.actions;
export default locationWeatherSclice.reducer;
