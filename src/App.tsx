import { Route, Routes } from "react-router";
import OpenPage from "./pages/OpenPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<OpenPage />} />
      </Route>
    </Routes>
  );
}

export default App;
