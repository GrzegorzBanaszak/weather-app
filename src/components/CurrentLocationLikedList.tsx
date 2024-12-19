import { IoMdMore } from "react-icons/io";
import { Link } from "react-router";

const CurrentLocationLikedList = () => {
  return (
    <div>
      <h2 className="text-xl font-bold my-6 text-center md:text-right">
        Ulubione lokalizacje
      </h2>
      <div className="flex flex-wrap gap-2 justify-between text-black md:justify-end">
        <div className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center w-full md:w-auto md:min-w-[300px]">
          <div className="font-bold text-lg flex items-center gap-2">
            <span className="text-xl">Wrocław</span>
            <img className="w-8" src={`https://flagsapi.com/PL/flat/64.png`} />
          </div>

          <Link
            className="bg-teal-400 text-white p-2 rounded-lg flex justify-center items-center"
            to="/forecast"
          >
            <IoMdMore className="cursor-pointer" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentLocationLikedList;
