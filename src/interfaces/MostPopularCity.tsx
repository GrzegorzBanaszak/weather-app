import Coordinate from "./Coordinate";
import Weather from "./Weather";

export default interface MostPopularCity {
  name: string;
  weather: Weather;
  coordinate: Coordinate;
}
