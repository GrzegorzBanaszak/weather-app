import Coordinate from "./Coordinate";
import Weather from "./Weather";

export default interface LocationWeatherState {
  coordinates: Coordinate;
  weather: Weather;
  isUpdated: boolean;
}
