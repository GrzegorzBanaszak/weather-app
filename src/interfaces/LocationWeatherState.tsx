import Coordinate from "./Coordinate";
import MostPopularCity from "./MostPopularCity";
import Weather from "./Weather";

export default interface LocationWeatherState {
  coordinates: Coordinate;
  weather: Weather;
  isUpdated: boolean;
  mostPopularCities: MostPopularCity[];
}
