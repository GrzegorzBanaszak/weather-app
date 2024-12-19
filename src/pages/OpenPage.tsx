import CurrentLocation from "../components/CurrentLocation";
import LocationCard from "../components/LocationCard";
import SearchBar from "../components/SearchBar";
import data from "../data/location.json";

const OpenPage = () => {
  return (
    <main>
      <CurrentLocation />
      <div className="px-4 flex flex-col gap-2">
        <SearchBar />
        {data.map((location, index) => (
          <LocationCard
            key={index}
            cityName={location.name}
            countryName={location.state}
            countryCode={location.country}
          />
        ))}
      </div>
    </main>
  );
};

export default OpenPage;
