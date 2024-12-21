import Coordinate from "./Coordinate";

export interface FavoriteWeaterLocationCardProps {
  cityName: string;
  countryName: string;
  countryCode: string;
  isHome: boolean;
  coordinates: Coordinate;
}
