import { TbArrowBadgeUpFilled } from "react-icons/tb";

const DetailWeatherHistory = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold text-center py-6">Prognoza na 4 dni</h2>
      <div className="grid md:grid-cols-3 gap-4 px-4">
        <div className="border-2 border-gray-100 rounded-lg px-4 py-2 shadow-md">
          <div className="flex justify-between items-center mb-4 border-b-2 border-gray-100 pb-2">
            <div>12.01.2024 18:40</div>
            <div className="w-8">
              <img
                src={`https://openweathermap.org/img/wn/04n@2x.png`}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <h4>Opis pogody </h4>
            <p>lekkie opady</p>
          </div>
          <div className="flex justify-between items-center py-2">
            <h4>Prawdopodobieństwo opadów</h4>
            <p>70%</p>
          </div>
          <div className="flex justify-between items-center py-2">
            <h4>Temepratura</h4>
            <p>12°C</p>
          </div>
          <div className="flex justify-between items-center py-2">
            <h4>Wiatr </h4>
            <p className="flex items-center gap-2">
              <TbArrowBadgeUpFilled style={{ rotate: `12deg` }} /> 12 km/h
            </p>
          </div>
          <div className="flex justify-between items-center py-2">
            <h4>Ciśnienie </h4>
            <p>1000 hPa</p>
          </div>
          <div className="flex justify-between items-center py-2">
            <h4>Wilgotność </h4>
            <p>30%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailWeatherHistory;
