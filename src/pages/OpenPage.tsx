import { useEffect } from "react";
import CurrentLocation from "../components/CurrentLocation";
import LocationCard from "../components/LocationCard";
import SearchBar from "../components/SearchBar";
import data from "../data/location.json";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getWeatherOnLocation } from "../features/locationWeather/locationWeatherSlice";

const OpenPage = () => {
  const { isUpdated } = useAppSelector((state) => state.locationWeather);
  const { favoriteLocation } = useAppSelector(
    (state) => state.favoriteLocation
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isUpdated) {
      dispatch(
        getWeatherOnLocation({
          lat: favoriteLocation.coordinates.lat,
          lon: favoriteLocation.coordinates.lon,
        })
      );
    }
  }, []);
  return (
    <main>
      <CurrentLocation />
      <div className="px-4 flex flex-col gap-2">
        <SearchBar />
        {data.map((location, index) => (
          <LocationCard
            key={index}
            cityName={location.name}
            countryName={location.state}
            countryCode={location.country}
          />
        ))}
      </div>
    </main>
  );
};

export default OpenPage;
