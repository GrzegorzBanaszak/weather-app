import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FavoriteLocationState from "../../interfaces/FavoriteLocationState";
import favoriteLocationService from "./favoriteLocationService";
import CityLocation from "../../interfaces/CityLocation";

const saveToLocalStorage = (key: string, value: object): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getFromLocalStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const favoriteLocation = getFromLocalStorage<CityLocation>("favoriteLocation");
const favoriteLocations =
  getFromLocalStorage<CityLocation[]>("favoriteLocations");

const initialState: FavoriteLocationState = {
  currentLocation: {
    name: "",
    countryCode: "",
    state: "",
    coordinates: {
      lat: 0,
      lon: 0,
    },
  },
  favoriteLocation: favoriteLocation
    ? favoriteLocation
    : {
        name: "",
        countryCode: "",
        state: "",
        coordinates: {
          lat: 0,
          lon: 0,
        },
      },
  favoriteLocations: favoriteLocations ? favoriteLocations : [],
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
    setFavoriteLocation: (state, action: PayloadAction<CityLocation>) => {
      state.favoriteLocation = action.payload;
      saveToLocalStorage("favoriteLocation", action.payload);
    },
    addToFavoriteList(state, action: PayloadAction<CityLocation>) {
      state.favoriteLocations.push(action.payload);
      saveToLocalStorage("favoriteLocations", state.favoriteLocations);
    },
    removeFromFavoriteList(state, action: PayloadAction<CityLocation>) {
      state.favoriteLocations = state.favoriteLocations.filter(
        (item) => item.name !== action.payload.name
      );
      saveToLocalStorage("favoriteLocations", state.favoriteLocations);
      if (state.favoriteLocation.name === action.payload.name) {
        state.favoriteLocation = {
          name: "",
          countryCode: "",
          state: "",
          coordinates: {
            lat: 0,
            lon: 0,
          },
        };
        saveToLocalStorage("favoriteLocation", state.favoriteLocation);
      }
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

export const {
  clearSearchLocations,
  setFavoriteLocation,
  addToFavoriteList,
  removeFromFavoriteList,
} = favoriteLocationSlice.actions;
export default favoriteLocationSlice.reducer;
