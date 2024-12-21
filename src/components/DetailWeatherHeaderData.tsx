import { TbArrowBadgeUpFilled } from "react-icons/tb";
import { useAppSelector } from "../app/hooks";
import DisplayTemperatureSymbol from "./DisplayTemperatureSymbol";

const DetailWeatherHeaderData = () => {
  const { currentWeather } = useAppSelector((state) => state.detailWeather);

  return (
    <div className="flex justify-center md:justify-start my-4 gap-8 flex-wrap md:text-xl">
      <div>
        <h4 className="font-bold">Temperatura</h4>
        <div className="text-center">
          {currentWeather.temp} <DisplayTemperatureSymbol />
        </div>
      </div>
      <div>
        <h4 className="font-bold">Ciśnienie</h4>
        <div className="text-center">{currentWeather.pressure} hPa</div>
      </div>
      <div>
        <h4 className="font-bold">Siła wiatru</h4>
        <div className="text-center md:text-left flex items-center gap-2">
          {currentWeather.windSpeed} km/h
          <TbArrowBadgeUpFilled
            style={{ rotate: `${currentWeather.windDeg}deg` }}
          />
        </div>
      </div>
      <div>
        <h4 className="font-bold">Wilgotność</h4>
        <div className="text-center gap-2">{currentWeather.humidity} %</div>
      </div>
      <div>
        <h4 className="font-bold">Zachmurzenie</h4>
        <div className="text-center gap-2">{currentWeather.clouds} %</div>
      </div>
    </div>
  );
};

export default DetailWeatherHeaderData;
