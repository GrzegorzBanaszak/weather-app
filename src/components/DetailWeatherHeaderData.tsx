import { TbArrowBadgeUpFilled } from "react-icons/tb";

const DetailWeatherHeaderData = () => {
  return (
    <div className="flex justify-center md:justify-start my-4 gap-8 flex-wrap">
      <div>
        <h4 className="font-bold">Temperatura</h4>
        <p>12°C</p>
      </div>
      <div>
        <h4 className="font-bold">Ciśnienie</h4>
        <p className="text-center md:text-left">100 hPa</p>
      </div>
      <div>
        <h4 className="font-bold">Siła wiatru</h4>
        <p className="text-center md:text-left flex items-center gap-2">
          12 km/h <TbArrowBadgeUpFilled style={{ rotate: `12deg` }} />
        </p>
      </div>
      <div>
        <h4 className="font-bold">Siła wiatru</h4>
        <p className="text-center md:text-left flex items-center gap-2">
          12 km/h <TbArrowBadgeUpFilled style={{ rotate: `12deg` }} />
        </p>
      </div>
    </div>
  );
};

export default DetailWeatherHeaderData;
