import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Sidebar.css";
import htmlTopics from "../../utils/HTMLSidebar";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const activeItemRef = useRef(null);
  const sidebarContentRef = useRef(null);

  // Set active item based on current path when component mounts
  useEffect(() => {
    // Find the active item from the current path
    const findActiveItem = () => {
      for (const topic of htmlTopics) {
        if (topic.subTopics) {
          const activeSubTopic = topic.subTopics.find(
            subTopic => subTopic.link === location.pathname
          );
          if (activeSubTopic) {
            setActiveItem(activeSubTopic.title);
            setOpenMenu(topic.title); // Open the parent menu
            return;
          }
        } else if (topic.link === location.pathname) {
          setActiveItem(topic.title);
          return;
        }
      }
    };
    
    findActiveItem();
  }, [location.pathname]);

  // Auto-scroll to active item whenever it changes or sidebar becomes visible
  useEffect(() => {
    const scrollToActiveItem = () => {
      // Wait for the DOM to update (especially after toggling menus)
      setTimeout(() => {
        if (activeItemRef.current && sidebarContentRef.current) {
          const container = sidebarContentRef.current;
          const activeElement = activeItemRef.current;

          // Calculate position
          const containerTop = container.scrollTop;
          const containerHeight = container.clientHeight;
          const activeElementTop = activeElement.offsetTop;
          const activeElementHeight = activeElement.clientHeight;

          // Determine scroll position to center the active item in view
          const scrollPosition = activeElementTop - (containerHeight / 2) + (activeElementHeight / 2);

          // Scroll with animation
          container.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Short delay to ensure DOM is updated
    };

    // Scroll to active item when it changes or when a menu opens
    if (activeItem && isSidebarVisible) {
      scrollToActiveItem();
    }
  }, [activeItem, openMenu, isSidebarVisible]);

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
        className="fixed top-2 left-4 z-50 w-12 h-10 bg-red-600 text-white rounded-md shadow-lg flex items-center justify-center"
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
          ${isMobileView ? "w-[85%] max-w-[250px]" : "w-64 lg:top-[60px]"}
        `}
      >
        {/* Header with centered title and toggle button left aligned */}
        <div className="p-4 border-b border-gray-300 flex items-center justify-center relative bg-white">
          {isMobileView && (
            <button
              onClick={toggleSidebar}
              className="absolute left-3 text-red-600"
              aria-label="Close sidebar"
            >
              <FaTimes size={22} />
            </button>
          )}
          <div className={isMobileView ? "mt-0" : "hidden lg:block"}>
            <h2 className="text-xl font-bold text-red-600 text-center">
              varCODE HTML Tutorial
            </h2>
          </div>
        </div>

        <div 
          ref={sidebarContentRef}
          className={`${isMobileView ? "h-[calc(100vh-70px)]" : "h-[calc(100vh-120px)]"} overflow-y-auto custom-scrollbar p-2`}
        >
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
                        ref={openMenu === topic.title && !topic.subTopics ? activeItemRef : null}
                      >
                        {topic.title}
                        {openMenu === topic.title ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                      {openMenu === topic.title && (
                        <ul className="mt-1 ml-4 space-y-1 text-gray-700">
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
                              ref={activeItem === subTopic.title ? activeItemRef : null}
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
                      ref={activeItem === topic.title ? activeItemRef : null}
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
      </div>
    </>
  );
};

export default Sidebar;