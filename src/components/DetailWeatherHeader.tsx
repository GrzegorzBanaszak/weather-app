import { FaLocationDot } from "react-icons/fa6";
import DetailWeatherHeaderData from "./DetailWeatherHeaderData";

const DetailWeatherHeader = () => {
  return (
    <div className="py-6 bg-blue-400 px-4 text-white">
      <div className="">
        <div className="flex justify-between">
          <div className="flex items-center text-2xl md:text-4xl">
            <FaLocationDot />
            <h1 className="text-2xl md:text-4xl font-bold py-3 ml-2">Syców</h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="w-12 bg-blue-300 rounded-xl">
              <img
                src={`https://openweathermap.org/img/wn/04n@2x.png`}
                alt=""
              />
            </div>
            <p>Lekkie zachmorzenie</p>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold my-6">Aktualna pogoda</h3>
      <DetailWeatherHeaderData />

      <div className="flex justify-end pt-4"></div>
    </div>
  );
};

export default DetailWeatherHeader;
