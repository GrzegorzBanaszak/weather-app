import { useEffect } from "react";
import CurrentLocation from "../components/CurrentLocation";
import LocationCard from "../components/LocationCard";
import SearchBar from "../components/SearchBar";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getWeatherOnLocation } from "../features/locationWeather/locationWeatherSlice";
import { clearSearchLocations } from "../features/favoritesLocation/favoriteLocationSlice";
import { Link } from "react-router";
import CurrentLocationCityList from "../components/CurrentLocationCityList";

const OpenPage = () => {
  const { isUpdated } = useAppSelector((state) => state.locationWeather);

  const { favoriteLocation, searchLocations } = useAppSelector(
    (state) => state.favoriteLocation
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (favoriteLocation.name !== "" && !isUpdated) {
      dispatch(
        getWeatherOnLocation({
          lat: favoriteLocation.coordinates.lat,
          lon: favoriteLocation.coordinates.lon,
        })
      );
    }
    dispatch(clearSearchLocations());
  }, []);
  return (
    <main>
      {favoriteLocation.name !== "" ? (
        <CurrentLocation />
      ) : (
        <div className="py-6 bg-blue-400 px-4 text-white h-[300px] flex justify-center items-center flex-col">
          <h1 className="text-2xl font bold">
            Nie posiadzasz lokalizacji domowej
          </h1>
          <Link
            className="mt-4 p-4 bg-white text-black rounded-md"
            to="/favorite-weather"
          >
            Wybierz domową lokalizacje
          </Link>
        </div>
      )}
      <CurrentLocationCityList />
      <div className="px-4 flex flex-col gap-2">
        <SearchBar />
        {searchLocations.length > 0 &&
          searchLocations.map((location, index) => (
            <LocationCard
              key={index}
              cityName={location.name}
              countryName={location.state}
              countryCode={location.countryCode}
              coordinates={{
                lat: location.coordinates.lat,
                lon: location.coordinates.lon,
              }}
            />
          ))}
      </div>
    </main>
  );
};

export default OpenPage;
