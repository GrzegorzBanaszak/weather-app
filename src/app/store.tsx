import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import locationWeatherReducer from "../features/locationWeather/locationWeatherSlice";
import detailWeatherReducer from "../features/detailWeather/detailWeatherSlice";
import favoriteLocationReducer from "../features/favoritesLocation/favoriteLocationSlice";

export const store = configureStore({
  reducer: {
    locationWeather: locationWeatherReducer,
    detailWeather: detailWeatherReducer,
    favoriteLocation: favoriteLocationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
