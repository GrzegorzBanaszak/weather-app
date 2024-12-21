import axios from "axios";

const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;
const searchLocations = async (query: string) => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
  );
  return res.data;
};

const favoriteLocationService = {
  searchLocations,
};
export default favoriteLocationService;
