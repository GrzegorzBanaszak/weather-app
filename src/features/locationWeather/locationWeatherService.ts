import axios from "axios";

const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;
console.log(apiKey);
const getWeatherOnLocation = async (lat: number, lon: number) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pl&appid=${apiKey}&units=metric`
  );
  return res.data;
};

const locationWeatherService = {
  getWeatherOnLocation,
};

export default locationWeatherService;
