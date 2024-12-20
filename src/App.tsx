import { Route, Routes } from "react-router";
import OpenPage from "./pages/OpenPage";
import Layout from "./pages/Layout";
import DetailWeatherPage from "./pages/DetailWeatherPage";
import FavoriteWeathersPage from "./pages/FavoriteWeathersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<OpenPage />} />
        <Route path="detail-weather" element={<DetailWeatherPage />} />
        <Route path="favorite-weather" element={<FavoriteWeathersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
