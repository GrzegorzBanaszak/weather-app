import { TbArrowBadgeUpFilled } from "react-icons/tb";
import { useAppSelector } from "../app/hooks";

const DetailWeatherHeaderData = () => {
  const { currentWeather } = useAppSelector((state) => state.detailWeather);
  return (
    <div className="flex justify-center md:justify-start my-4 gap-8 flex-wrap md:text-xl">
      <div>
        <h4 className="font-bold">Temperatura</h4>
        <p className="text-center">{currentWeather.temp}°C</p>
      </div>
      <div>
        <h4 className="font-bold">Ciśnienie</h4>
        <p className="text-center">{currentWeather.pressure} hPa</p>
      </div>
      <div>
        <h4 className="font-bold">Siła wiatru</h4>
        <p className="text-center md:text-left flex items-center gap-2">
          {currentWeather.windSpeed} km/h
          <TbArrowBadgeUpFilled
            style={{ rotate: `${currentWeather.windDeg}deg` }}
          />
        </p>
      </div>
      <div>
        <h4 className="font-bold">Wilgotność</h4>
        <p className="text-center gap-2">{currentWeather.humidity} %</p>
      </div>
      <div>
        <h4 className="font-bold">Zachmurzenie</h4>
        <p className="text-center gap-2">{currentWeather.clouds} %</p>
      </div>
    </div>
  );
};

export default DetailWeatherHeaderData;
