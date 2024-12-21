import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FavoriteLocationState from "../../interfaces/FavoriteLocationState";
import favoriteLocationService from "./favoriteLocationService";

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

export const searchLocations = createAsyncThunk(
  "favoriteLocation/searchLocations",
  async (query: string, thunkAPI) => {
    try {
      return await favoriteLocationService.searchLocations(query);
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const favoriteLocationSlice = createSlice({
  name: "favoriteLocation",
  initialState,
  reducers: {
    clearSearchLocations: (state) => {
      state.searchLocations = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchLocations.fulfilled, (state, action) => {
      state.searchLocations = action.payload.map((item: any) => ({
        name: item.name,
        countryCode: item.country,
        state: item.state,
        coordinates: {
          lat: item.lat,
          lon: item.lon,
        },
      }));
    });
  },
});

export const { clearSearchLocations } = favoriteLocationSlice.actions;
export default favoriteLocationSlice.reducer;
