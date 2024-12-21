import React from "react";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import CurrentLocationCityCardProps from "../interfaces/CurrentLocationCityCardProps";
import Tooltip from "./Tooltip";
import { Link } from "react-router";
import { FaInfoCircle } from "react-icons/fa";
import DisplayTemperatureSymbol from "./DisplayTemperatureSymbol";

const CurrentLocationCityCard: React.FC<CurrentLocationCityCardProps> = ({
  city,
}) => {
  return (
    <div className="p-4 bg-white text-black shadow-md rounded">
      <h4 className="font-bold pb-1 mb-1 border-b-2 border-gray-100 flex items-center justify-between">
        {city.name}
        <Tooltip message="Dokładne informacje pogodowe">
          <Link
            to={`/detail-weather?lat=${city.coordinate.lat}&lon=${city.coordinate.lon}`}
          >
            <FaInfoCircle
              className="cursor-pointer hover:text-blue-800 ease-in duration-300"
              size={22}
            />
          </Link>
        </Tooltip>
      </h4>
      <div>
        <h4>Temperatura</h4>
        <p>
          {city.weather.temp}
          <DisplayTemperatureSymbol />
        </p>
      </div>
      <div>
        <h4>Ciśnienie</h4>
        <p className="text-center md:text-left">{city.weather.pressure} hPa</p>
      </div>
      <div>
        <h4>Siła wiatru</h4>
        <p className="text-center md:text-left flex items-center gap-2">
          {city.weather.windSpeed} km/h
          <TbArrowBadgeUpFilled
            style={{ rotate: `${city.weather.windDeg}deg}` }}
          />
        </p>
      </div>
    </div>
  );
};

export default CurrentLocationCityCard;
