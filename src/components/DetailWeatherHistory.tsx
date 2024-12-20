import DetailWeatherHistoryCard from "./DetailWeatherHistoryCard";
import { useAppSelector } from "../app/hooks";

const DetailWeatherHistory = () => {
  const { forecast } = useAppSelector((state) => state.detailWeather);
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold text-center py-6">Prognoza na 5 dni</h2>
      <div className="grid md:grid-cols-3 gap-4 px-4">
        {forecast.map((item, index) => (
          <DetailWeatherHistoryCard
            key={index}
            date={item.date}
            weather={item.weather}
          />
        ))}
      </div>
    </section>
  );
};

export default DetailWeatherHistory;
