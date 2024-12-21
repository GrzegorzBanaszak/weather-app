import { useAppSelector } from "../app/hooks";
import FavoriteWeaterLocationCard from "../components/FavoriteWeaterLocationCard";

const FavoriteWeathersPage = () => {
  const { favoriteLocations, favoriteLocation } = useAppSelector(
    (state) => state.favoriteLocation
  );
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold my-6 text-center ">
        Ulubione lokalizacje
      </h1>
      {favoriteLocations.map((item, index) => (
        <FavoriteWeaterLocationCard
          key={index}
          cityName={item.name}
          countryCode={item.countryCode}
          countryName={item.state}
          isHome={item.name === favoriteLocation.name}
          coordinates={item.coordinates}
        />
      ))}
    </div>
  );
};

export default FavoriteWeathersPage;
