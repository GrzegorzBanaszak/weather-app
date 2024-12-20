import Coordinate from "./Coordinate";
import Weather from "./Weather";

export default interface LocationWeatherState {
  cityName: string;
  country: string;
  coordinates: Coordinate;
  weather: Weather;
}
