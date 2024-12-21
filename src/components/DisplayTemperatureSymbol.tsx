import { useAppSelector } from "../app/hooks";
import TemperatureEnum from "../enum/TemperatureEnum";

const DisplayTemperatureSymbol = () => {
  const { temperatureUnit } = useAppSelector((state) => state.locationWeather);
  return (
    <div className="inline-block">
      {temperatureUnit === TemperatureEnum.CELSIUS ? "°C" : "°F"}
    </div>
  );
};

export default DisplayTemperatureSymbol;
