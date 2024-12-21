import { useEffect } from "react";
import CurrentLocationCityCard from "./CurrentLocationCityCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getWeatherOnMostPopularCities } from "../features/locationWeather/locationWeatherSlice";

const CurrentLocationCityList = () => {
  const dispatch = useAppDispatch();
  const { mostPopularCities } = useAppSelector(
    (state) => state.locationWeather
  );
  useEffect(() => {
    dispatch(getWeatherOnMostPopularCities());
  }, []);

  return (
    <div className="bg-blue-200 p-4">
      <h3 className="text-center text-2xl my-4">Popularne miasta w polsce</h3>
      <div className="md:grid md:grid-cols-5 gap-4">
        {mostPopularCities.map((city, index) => (
          <CurrentLocationCityCard key={index} city={city} />
        ))}
      </div>
    </div>
  );
};

export default CurrentLocationCityList;
