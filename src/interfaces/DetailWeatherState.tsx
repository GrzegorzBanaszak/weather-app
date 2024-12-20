import Coordinate from "./Coordinate";
import Forecast from "./Forecast";
import Weather from "./Weather";

export default interface DetailWeatherState {
  cityName: string;
  coordinate: Coordinate;
  currentWeather: Weather;
  forecast: Forecast[];
}
