import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Sidebar.css";
import htmlTopics from "../../utils/HTMLSidebar";

const Sidebar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth < 1024;
      setIsMobileView(isMobile);
      setIsSidebarVisible(!isMobile);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileView &&
        isSidebarVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest("[data-sidebar-toggle]")
      ) {
        setIsSidebarVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileView, isSidebarVisible]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleNavigation = (link, title) => {
    navigate(link);
    setActiveItem(title);
    if (isMobileView) {
      setIsSidebarVisible(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  if (isMobileView && !isSidebarVisible) {
    return (
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 w-12 h-10 bg-red-600 text-white rounded-md shadow-lg flex items-center justify-center"
        aria-label="Open sidebar"
        data-sidebar-toggle
      >
        <FaBars size={20} />
      </button>
    );
  }

  return (
    <>
      {isMobileView && isSidebarVisible && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" />
      )}

      <div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300
          ${isMobileView ? "w-[85%] max-w-[250px]" : "w-[300px] lg:mt-[60px]"}
        `}
      >
        {/* Header with centered title and toggle button left aligned */}
        <div className="p-5 border-b mt-4 border-gray-300 flex items-center justify-center relative bg-white z-50">
          {isMobileView && (
            <button
              onClick={toggleSidebar}
              className="absolute left-3 text-red-600"
              aria-label="Close sidebar"
            >
              <FaTimes size={22} />
            </button>
          )}
          <div className=" lg:block hidden ">
          <h1 className="text-xl font-bold text-red-600 text-center md:mt-0 sm:mt-5">
            varCODE HTML Tutorial
          </h1>
          </div>
        </div>

      <div className="h-[calc(100vh-50px)] overflow-y-auto custom-scrollbar p-1">
        <ul className="space-y-2 w-full hover:cursor-pointer">
          {htmlTopics && htmlTopics.length > 0 ? (
            htmlTopics.map((topic, index) => (
              <li key={index}>
                {topic.subTopics ? (
                  <div className="border-b border-gray-400">
                    <div
                      className={`flex justify-between items-center cursor-pointer font-semibold p-2 rounded transition-all ${
                        openMenu === topic.title ? "bg-red-200" : "bg-gray-100"
                      }`}
                      onClick={() => toggleMenu(topic.title)}
                    >
                      {topic.title}
                      {openMenu === topic.title ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </div>
                    {openMenu === topic.title && (
                      <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                        {topic.subTopics.map((subTopic, subIndex) => (
                          <li
                            key={subIndex}
                            className={`p-1 cursor-pointer transition-all ${
                              activeItem === subTopic.title
                                ? "bg-red-200 font-semibold"
                                : "hover:bg-red-200 hover:font-medium"
                            }`}
                            onClick={() =>
                              handleNavigation(subTopic.link, subTopic.title)
                            }
                          >
                            {subTopic.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div
                    className={`p-2 cursor-pointer transition-all ${
                      activeItem === topic.title
                        ? "bg-red-200 font-semibold"
                        : "hover:bg-red-200 hover:font-medium"
                    }`}
                    onClick={() => handleNavigation(topic.link, topic.title)}
                  >
                    {topic.title}
                  </div>
                )}
              </li>
            ))
          ) : (
            <p className="p-2 text-gray-500">Loading topics...</p>
          )}
        </ul>
      </div>
    </div>
        <div className="h-[calc(100vh-50px)] overflow-y-auto custom-scrollbar p-2">
          <ul className="space-y-2">
            {htmlTopics && htmlTopics.length > 0 ? (
              htmlTopics.map((topic, index) => (
                <li key={index}>
                  {topic.subTopics ? (
                    <div className="border-b border-gray-200">
                      <div
                        className={`flex justify-between items-center font-semibold p-2 rounded cursor-pointer transition-all ${
                          openMenu === topic.title ? "bg-red-200" : "bg-gray-100"
                        }`}
                        onClick={() => toggleMenu(topic.title)}
                      >
                        {topic.title}
                        {openMenu === topic.title ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                      {openMenu === topic.title && (
                        <ul className="mt-1 ml-4 space-y-2 text-gray-700">
                          {topic.subTopics.map((subTopic, subIndex) => (
                            <li
                              key={subIndex}
                              className={`p-1 rounded cursor-pointer transition-all ${
                                activeItem === subTopic.title
                                  ? "bg-red-200 font-semibold"
                                  : "hover:bg-red-100"
                              }`}
                              onClick={() =>
                                handleNavigation(subTopic.link, subTopic.title)
                              }
                            >
                              {subTopic.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`p-2 rounded cursor-pointer transition-all ${
                        activeItem === topic.title
                          ? "bg-red-200 font-semibold"
                          : "hover:bg-red-100"
                      }`}
                      onClick={() => handleNavigation(topic.link, topic.title)}
                    >
                      {topic.title}
                    </div>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-500 p-2">Loading topics...</p>
            )}
          </ul>
        </div>
      
    </>
  );
};

export default Sidebar;

