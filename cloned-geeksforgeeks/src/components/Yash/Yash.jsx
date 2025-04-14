import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { subNavLinks } from "../../utils/SubNavLinks";

const SubNav = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Check if viewport is mobile or tablet
  useEffect(() => {
    const checkScreenSize = () => {
      // Consider screens smaller than 768px as mobile/tablet
      setIsMobileOrTablet(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // If mobile or tablet, don't render the SubNav
  if (isMobileOrTablet) {
    return null;
  }

  // Determine if a link is active based on current path
  const isActive = (path) => {
    return location.pathname === path;
  };

  const scrollNav = (direction) => {
    if (navRef.current) {
      setIsScrolling(true);
      navRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
      
      // Reset scrolling state after animation completes
      setTimeout(() => setIsScrolling(false), 300);
    }
  };

  return (
    <nav className="hidden md:flex bg-transparent backdrop-blur-lg bg-white/20 border border-white/20 text-gray-800 py-3 px-4 shadow-lg items-center sticky top-0 z-50">
      {/* Left fade overlay */}
      <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-red-600 to-transparent z-10"></div>

      <button
        className={`absolute left-2 w-8 h-8 flex items-center justify-center bg-red-700/60 backdrop-blur-sm hover:bg-white/20 text-white hover:text-red-600 rounded-full shadow-md z-20 transition-all duration-200 ${
          isScrolling ? "scale-90" : "scale-100"
        }`}
        onClick={() => scrollNav("left")}
        aria-label="Scroll left"
      >
        <FaChevronLeft size={16} />
      </button>
      
      <div
        ref={navRef}
        className="flex space-x-1 md:space-x-2 overflow-x-auto whitespace-nowrap px-12 py-1 scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {subNavLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`relative px-4 py-2 font-medium text-sm md:text-base transition-all duration-200 rounded-md ${
              isActive(link.path)
                ? "bg-red-600 text-white shadow-lg shadow-blue-500/20"
                : "text-white-200 hover:bg-gray-300/60 hover:text-red-600"
            }`}
          >
            {link.name}
            {/* Active link indicator dot */}
            {isActive(link.path) && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
            )}
          </Link>
        ))}
      </div>

      {/* Right fade overlay */}
      <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-red-600 to-transparent z-10"></div>

      <button
        className={`absolute right-2 w-8 h-8 flex items-center justify-center bg-red-700/60 backdrop-blur-sm hover:bg-white/20 text-white hover:text-red-600 rounded-full shadow-md z-20 transition-all duration-200 ${
          isScrolling ? "scale-90" : "scale-100"
        }`}
        onClick={() => scrollNav("right")}
        aria-label="Scroll right"
      >
        <FaChevronRight size={16} />
      </button>
    </nav>
  );
};

export default SubNav;