import { useAppSelector } from "../app/hooks";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
const CurrentLocationWeatherData = () => {
  const { weather, wind } = useAppSelector((state) => state.locationWeather);
  return (
    <div className="flex my-4 justify-between md:flex-col ">
      <div>
        <h4 className="font-bold">Temperatura</h4>
        <p>{weather.temp}°C</p>
      </div>
      <div>
        <h4 className="font-bold">Ciśnienie</h4>
        <p className="text-center md:text-left">{weather.pressure} hPa</p>
      </div>
      <div>
        <h4 className="font-bold">Siła wiatru</h4>
        <p className="text-center md:text-left flex items-center gap-2">
          {wind.speed} km/h{" "}
          <TbArrowBadgeUpFilled style={{ rotate: `${wind.deg}deg` }} />
        </p>
      </div>
    </div>
  );
};

export default CurrentLocationWeatherData;
