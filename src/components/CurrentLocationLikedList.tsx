import { Link } from "react-router";
import Tooltip from "./Tooltip";
import { FaInfoCircle } from "react-icons/fa";
import { useAppSelector } from "../app/hooks";

const CurrentLocationLikedList = () => {
  const { favoriteLocations } = useAppSelector(
    (state) => state.favoriteLocation
  );
  return (
    <div>
      <h2 className="text-xl font-bold my-6 text-center md:text-right">
        Ulubione lokalizacje
      </h2>
      <div className="flex flex-wrap gap-2 justify-between text-black md:justify-end">
        {favoriteLocations.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center w-full md:w-auto md:min-w-[200px]"
          >
            <div className="font-bold text-lg flex items-center gap-2">
              <span className="text-xl">{item.name}</span>
              <img
                className="w-8"
                src={`https://flagsapi.com/${item.countryCode}/flat/64.png`}
              />
            </div>

            <Link
              to={`/detail-weather?lat=${item.coordinates.lat}&lon=${item.coordinates.lon}`}
            >
              <Tooltip message="Dokładne informacje pogodowe">
                <FaInfoCircle
                  className="cursor-pointer hover:text-blue-800 ease-in duration-300"
                  size={24}
                />
              </Tooltip>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentLocationLikedList;
