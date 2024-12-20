import { createSlice } from "@reduxjs/toolkit";
import FavoriteLocationState from "../../interfaces/FavoriteLocationState";

const initialState: FavoriteLocationState = {
  currentLocation: {
    name: "Syców",
    countryCode: "PL",
    state: "Polska",
    coordinates: {
      lat: 51.3,
      lon: 17.72,
    },
  },
  favoriteLocation: {
    name: "Syców",
    countryCode: "PL",
    state: "Polska",
    coordinates: {
      lat: 51.3,
      lon: 17.72,
    },
  },
  favoriteLocations: [
    {
      name: "Syców",
      countryCode: "PL",
      state: "Polska",
      coordinates: {
        lat: 51.3,
        lon: 17.72,
      },
    },
    {
      name: "London",
      countryCode: "GB",
      state: "England",
      coordinates: {
        lat: 51.5,
        lon: -0.12,
      },
    },
  ],
  searchLocations: [],
};

export const favoriteLocationSlice = createSlice({
  name: "favoriteLocation",
  initialState,
  reducers: {},
});

export const {} = favoriteLocationSlice.actions;
export default favoriteLocationSlice.reducer;
