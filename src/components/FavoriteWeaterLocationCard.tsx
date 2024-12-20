import React from "react";
import { FavoriteWeaterLocationCardProps } from "../interfaces/FavoriteWeaterLocationCardPorps";
import { FaInfoCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
const FavoriteWeaterLocationCard: React.FC<FavoriteWeaterLocationCardProps> = ({
  cityName,
  countryCode,
  countryName,
  isHome,
}) => {
  return (
    <div className="border-2 border-gray-100 rounded-lg px-4 py-6 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="font-bold">{cityName}</div>
        <div>{countryName}</div>
        <div className="w-8">
          <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} />
        </div>
      </div>
      <div className="text-gray-500 flex items-center gap-4">
        <FaHome
          className={`cursor-pointer ${isHome ? "text-blue-800" : ""}`}
          size={24}
        />
        <FaTrashAlt
          className="cursor-pointer hover:text-red-400 ease-in duration-300"
          size={24}
        />

        <FaInfoCircle
          className="cursor-pointer hover:text-blue-800 ease-in duration-300"
          size={24}
        />
      </div>
    </div>
  );
};

export default FavoriteWeaterLocationCard;
