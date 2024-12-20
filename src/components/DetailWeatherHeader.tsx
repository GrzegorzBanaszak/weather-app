import { FaLocationDot } from "react-icons/fa6";
import DetailWeatherHeaderData from "./DetailWeatherHeaderData";
import { useAppSelector } from "../app/hooks";

const DetailWeatherHeader = () => {
  const { cityName, currentWeather } = useAppSelector(
    (state) => state.detailWeather
  );
  return (
    <div className="py-6 bg-blue-400 px-4 text-white">
      <div className="">
        <div className="flex justify-between">
          <div className="flex items-center text-2xl md:text-5xl">
            <FaLocationDot />
            <h1 className=" font-bold py-3 ml-2">{cityName}</h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="w-16 bg-blue-300 rounded-xl">
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.weatherIcon}@2x.png`}
                alt=""
              />
            </div>
            <p className="uppercase">{currentWeather.weatherDescription}</p>
          </div>
        </div>
      </div>
      <h3 className="text-3xl font-bold my-6">Aktualna pogoda</h3>
      <DetailWeatherHeaderData />

      <div className="flex justify-end pt-4"></div>
    </div>
  );
};

export default DetailWeatherHeader;
