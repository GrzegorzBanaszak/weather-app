import React from "react";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import DetailWeatherHistoryCardProps from "../interfaces/DetailWeatherHistoryCardProps";
import moment from "moment";
import DisplayTemperatureSymbol from "./DisplayTemperatureSymbol";

const DetailWeatherHistoryCard: React.FC<DetailWeatherHistoryCardProps> = ({
  date,
  weather,
}) => {
  return (
    <div className="border-2 border-gray-100 rounded-lg px-4 py-2 shadow-md">
      <div className="flex justify-between items-center mb-4 border-b-2 border-gray-100 pb-2">
        <div className="font-bold">
          {moment.unix(date).format("DD.MM.YYYY HH:mm")}
        </div>
        <div className="w-16">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <h4>Opis pogody </h4>
        <p>{weather.weatherDescription}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <h4>Prawdopodobieństwo opadów</h4>
        <p>{weather.pop}%</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <h4>Temepratura</h4>
        <div>
          {weather.temp}
          <DisplayTemperatureSymbol />
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <h4>Wiatr </h4>
        <p className="flex items-center gap-2">
          <TbArrowBadgeUpFilled style={{ rotate: `${weather.windDeg}deg` }} />{" "}
          {weather.windSpeed} km/h
        </p>
      </div>
      <div className="flex justify-between items-center py-2">
        <h4>Ciśnienie </h4>
        <p>{weather.pressure} hPa</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <h4>Wilgotność </h4>
        <p>{weather.humidity}%</p>
      </div>
    </div>
  );
};

export default DetailWeatherHistoryCard;
