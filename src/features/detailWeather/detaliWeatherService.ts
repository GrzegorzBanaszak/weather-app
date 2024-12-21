import axios from "axios";

const getWeatherOnLocation = async (
  lat: number,
  lon: number,
  temperatureUnit: string
) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pl&appid=57f84e94ed1a24289730c9eb34aaf4c1&units=${temperatureUnit}`
  );
  return res.data;
};

const getForecastOnLocation = async (
  lat: number,
  lon: number,
  temperatureUnit: string
) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pl&appid=57f84e94ed1a24289730c9eb34aaf4c1&units=${temperatureUnit}`
  );
  return res.data;
};

const detailWeatherService = { getWeatherOnLocation, getForecastOnLocation };

export default detailWeatherService;
