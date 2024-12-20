import FavoriteWeaterLocationCard from "../components/FavoriteWeaterLocationCard";

const FavoriteWeathersPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold my-6 text-center ">
        Ulubione lokalizacje
      </h1>
      <div>
        <FavoriteWeaterLocationCard
          cityName="Sycow"
          countryCode="PL"
          countryName="Polska"
          isHome
        />
      </div>
    </div>
  );
};

export default FavoriteWeathersPage;
