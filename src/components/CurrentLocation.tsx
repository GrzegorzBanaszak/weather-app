import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import RainIcon from "../icons/RainIcon";

const CurrentLocation = () => {
  return (
    <div className="py-6 bg-blue-200 px-4">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-2xl">Twoja aktualna lokalizacja</h1>
          <div className="w-10 ">
            <RainIcon />
          </div>
        </div>
        <div className="flex items-center">
          <FaLocationDot />
          <h2 className="text-xl font-bold py-3 ml-2">Syców</h2>
        </div>
      </div>

      <div className="flex my-4 justify-between">
        <div>
          <h4 className="font-bold">Temperatura</h4>
          <p>12.5°C</p>
        </div>
        <div>
          <h4 className="font-bold">Szansa opadów</h4>
          <p className="text-center">30%</p>
        </div>
        <div>
          <h4 className="font-bold">Siła wiatru</h4>
          <p className="text-center">13 km/h</p>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Link to="/forecast">
          <button className="bg-white text-blue-900 px-4 py-2 rounded">
            Sprawdz pogode
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CurrentLocation;
