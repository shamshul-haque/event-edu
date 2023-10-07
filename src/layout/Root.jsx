import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-barlow">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
