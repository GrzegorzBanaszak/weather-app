import Coordinate from "./Coordinate";

export default interface LocationCardProps {
  cityName: string;
  countryName: string;
  countryCode: string;
  coordinates: Coordinate;
}
