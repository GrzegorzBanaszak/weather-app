import Coordinate from "./Coordinate";
import Forecast from "./Forecast";
import Weather from "./Weather";

export default interface DetailWeatherState {
  cityName: string;
  country: string;
  coordinate: Coordinate;
  currentWeather: Weather;
  forecast: Forecast[];
  isLoaded: boolean;
}
