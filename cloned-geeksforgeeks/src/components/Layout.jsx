import React from "react";
import Yash from "../components/Yash/Yash";
import Sidebar from "./Hariram/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Bhanu/Bhanu";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Yash />
      <div className="w-full flex flex-row flex-wrap">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
