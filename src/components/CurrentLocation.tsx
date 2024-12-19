import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import CurrentLocationWeatherData from "./CurrentLocationWeatherData";
import CurrentLocationLikedList from "./CurrentLocationLikedList";
import { useAppSelector } from "../app/hooks";

const CurrentLocation = () => {
  const { cityName, clouds } = useAppSelector((state) => state.locationWeather);
  return (
    <div className="py-6 bg-blue-400 px-4 text-white">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-2xl">Twoja aktualna lokalizacja</h1>
          <div className="w-12 bg-blue-300 rounded-xl">
            <img
              src={`https://openweathermap.org/img/wn/${clouds.icon}@2x.png`}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between items-center pt-6">
          <div className="flex items-center">
            <FaLocationDot />
            <h2 className="text-2xl font-bold py-3 ml-2">{cityName}</h2>
          </div>
          <Link to="/forecast">
            <button className="bg-white text-blue-900 px-4 py-2 rounded">
              Sprawdz pogode
            </button>
          </Link>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <CurrentLocationWeatherData />
        <CurrentLocationLikedList />
      </div>
      <div className="flex justify-end pt-4"></div>
    </div>
  );
};

export default CurrentLocation;
