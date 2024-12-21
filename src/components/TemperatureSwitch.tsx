import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import TemperatureEnum from "../enum/TemperatureEnum";
import {
  getWeatherOnLocation,
  getWeatherOnMostPopularCities,
  temperatureUnitChanged,
} from "../features/locationWeather/locationWeatherSlice";
import { getDetailWeatherAndForecast } from "../features/detailWeather/detailWeatherSlice";

const TemperatureSwitch = () => {
  const { temperatureUnit } = useAppSelector((state) => state.locationWeather);
  const { coordinate } = useAppSelector((state) => state.detailWeather);
  const { favoriteLocation } = useAppSelector(
    (state) => state.favoriteLocation
  );
  const location = useLocation();
  const dispatch = useAppDispatch();
  const toggleTemperature = () => {
    const temp =
      temperatureUnit === TemperatureEnum.CELSIUS
        ? TemperatureEnum.FAHRENHEIT
        : TemperatureEnum.CELSIUS;
    if (location.pathname == "/") {
      dispatch(
        getWeatherOnLocation({
          lat: favoriteLocation.coordinates.lat,
          lon: favoriteLocation.coordinates.lon,
          temperatureUnit: temp,
        })
      );
      dispatch(getWeatherOnMostPopularCities(temp));
    } else if (location.pathname == "/detail-weather") {
      dispatch(
        getDetailWeatherAndForecast({
          lat: coordinate.lat,
          lon: coordinate.lon,
          temperatureUnit: temp,
        })
      );
    }
    dispatch(temperatureUnitChanged());
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Celsjusz */}
      <div
        className={`w-8 h-8 flex justify-center items-center rounded-full font-semibold ${
          temperatureUnit === TemperatureEnum.CELSIUS
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        °C
      </div>

      {/* Przełącznik */}
      <div
        className="w-12 h-6 bg-gray-300 rounded-full flex items-center cursor-pointer"
        onClick={toggleTemperature}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
            temperatureUnit === TemperatureEnum.CELSIUS
              ? "translate-x-0"
              : "translate-x-6"
          }`}
        ></div>
      </div>

      {/* Fahrenheit */}
      <div
        className={`w-8 h-8 flex justify-center items-center rounded-full font-semibold ${
          temperatureUnit === TemperatureEnum.FAHRENHEIT
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        °F
      </div>
    </div>
  );
};

export default TemperatureSwitch;
