import React from "react";
import LocationCardProps from "../interfaces/LocationCardProps";

import { CiStar } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import Tooltip from "./Tooltip";
const LocationCard: React.FC<LocationCardProps> = ({
  cityName,
  countryName,
  countryCode,
}) => {
  return (
    <div className="border-2 border-gray-100 rounded-lg px-4 py-2 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="font-bold">{cityName}</div>
        <div>{countryName}</div>
        <div className="w-8">
          <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} />
        </div>
      </div>
      <div className="text-gray-500 flex items-center gap-4">
        <Tooltip message="Dodaj do ulubionych">
          <CiStar
            className="cursor-pointer hover:text-yellow-400 ease-in duration-300 "
            size={24}
          />
        </Tooltip>

        <Tooltip message="Dokładne informacje pogodowe">
          <FaInfoCircle
            className="cursor-pointer hover:text-blue-800 ease-in duration-300"
            size={24}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default LocationCard;
