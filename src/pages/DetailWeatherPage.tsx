import { useLocation } from "react-router";
import DetailWeatherHeader from "../components/DetailWeatherHeader";
import DetailWeatherHistory from "../components/DetailWeatherHistory";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getDetailWeatherAndForecast,
  resetLoading,
} from "../features/detailWeather/detailWeatherSlice";
import Spinner from "../components/Spinner";

const DetailWeatherPage = () => {
  const location = useLocation();
  const { isLoaded } = useAppSelector((state) => state.detailWeather);
  const dispatch = useAppDispatch();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  useEffect(() => {
    dispatch(resetLoading());
    dispatch(
      getDetailWeatherAndForecast({ lat: Number(lat), lon: Number(lon) })
    );
  }, [lat, lon]);
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center pt-8">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <DetailWeatherHeader />
      <DetailWeatherHistory />
    </>
  );
};

export default DetailWeatherPage;
