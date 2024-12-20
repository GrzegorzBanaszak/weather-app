import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className=" bg-gray-100">
      <div className="min-h-screen h-full container mx-auto bg-white">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
