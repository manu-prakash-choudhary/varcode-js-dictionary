import React, { useState } from "react";
import Yash from "../components/Yash/Yash";
import Sidebar from "./Hariram/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Bhanu/Bhanu.jsx";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Desktop Top Bar (Yash) */}
      <div className="hidden lg:block">
        <Yash />
      </div>

      {/* Mobile/Tablet Top Bar with Title & Toggle Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-[58px] bg-white border-b border-gray-300 z-40 flex items-center justify-center shadow-md">
        <h1 className="text-xl font-bold text-red-600">varCODE HTML Tutorial</h1>
      </div>

      {/* Body Section */}
      <div className="flex flex-1 relative pt-[58px] lg:pt-0">
        <div className=" lg:block  lg:w-[10%] w-0 mr-[-8rem] md:mr-[-8rem] mt-[30px]">
           <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        </div>
        <div className="flex-1 lg:ml-[-3rem] lg:ml-20 md:ml-[-5rem] p-2 lg:pl-5 sm:w-full overflow-auto">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
