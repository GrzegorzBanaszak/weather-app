import axios from "axios";

const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;
const getWeatherOnLocation = async (
  lat: number,
  lon: number,
  temperatureUnit: string
) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pl&appid=${apiKey}&units=${temperatureUnit}`
  );
  return res.data;
};

const getWeatherByCityName = async (
  cityName: string,
  temperatureUnit: string
) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pl&appid=${apiKey}&units=${temperatureUnit}`
  );

  return res.data;
};
const locationWeatherService = {
  getWeatherOnLocation,
  getWeatherByCityName,
};

export default locationWeatherService;
