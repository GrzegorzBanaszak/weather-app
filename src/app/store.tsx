import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import locationWeatherReducer from "../features/locationWeather/locationWeatherSlice";

export const store = configureStore({
  reducer: {
    locationWeather: locationWeatherReducer,
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
