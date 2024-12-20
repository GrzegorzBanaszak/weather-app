import CityLocation from "./CityLocation";

export default interface FavoriteLocationState {
  currentLocation: CityLocation;
  favoriteLocations: CityLocation[];
  searchLocations: CityLocation[];
  favoriteLocation: CityLocation;
}
