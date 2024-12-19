import { Link } from "react-router";

const CurrentLocationLikedList = () => {
  return (
    <div>
      <h2 className="text-xl font-bold my-6 text-center md:text-right">
        Ulubione lokalizacje
      </h2>
      <div className="flex flex-wrap gap-2 justify-between text-black md:justify-end">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="font-bold text-lg flex items-center pb-4 gap-2">
            <span>Wrocław</span>
            <img className="w-10" src={`https://flagsapi.com/PL/flat/64.png`} />
          </div>

          <Link
            className="bg-blue-900 text-white py-2 w-full block text-center rounded-lg"
            to="/forecast"
          >
            Szczegóły
          </Link>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="font-bold text-lg flex items-center pb-4 gap-2">
            <span>Wrocław</span>
            <img className="w-10" src={`https://flagsapi.com/PL/flat/64.png`} />
          </div>

          <Link
            className="bg-blue-900 text-white py-2 w-full block text-center rounded-lg"
            to="/forecast"
          >
            Szczegóły
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentLocationLikedList;
