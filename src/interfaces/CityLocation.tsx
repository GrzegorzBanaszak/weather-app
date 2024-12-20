import Coordinate from "./Coordinate";

export default interface CityLocation {
  name: string;
  countryCode: string;
  coordinates: Coordinate;
  state: string;
}
