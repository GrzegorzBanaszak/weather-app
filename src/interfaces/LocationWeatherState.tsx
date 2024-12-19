import Clouds from "./Clouds";
import Coordinate from "./Coordinate";
import Weather from "./weather";
import Wind from "./Wind";

export default interface LocationWeatherState {
  cityName: string;
  country: string;
  coordinates: Coordinate;
  weather: Weather;
  clouds: Clouds;
  wind: Wind;
}
