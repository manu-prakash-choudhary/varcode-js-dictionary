// SubNav.jsx
import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { subNavLinks } from "../../utils/SubNavLinks";

const SubNav = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const activeItemRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [navHeight, setNavHeight] = useState(0);

  // Check if we need to show scroll arrows
  const checkScrollArrows = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // Get nav height for sidebar positioning
    if (navRef.current && !isMobileOrTablet) {
      const height = navRef.current.closest('nav').offsetHeight;
      setNavHeight(height);
      // Set CSS variable that can be used by the sidebar
      document.documentElement.style.setProperty('--subnav-height', `${height}px`);
    }
    
    // Initialize scroll indicators
    checkScrollArrows();
    
    // Add scroll event listener to update indicators
    if (navRef.current) {
      navRef.current.addEventListener('scroll', checkScrollArrows);
      return () => navRef.current?.removeEventListener('scroll', checkScrollArrows);
    }
  }, [isMobileOrTablet]);

  // Scroll to active link when location changes
  useEffect(() => {
    if (navRef.current && activeItemRef.current) {
      // Calculate scroll position to center the active link
      const container = navRef.current;
      const activeItem = activeItemRef.current;
      
      const containerWidth = container.offsetWidth;
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      
      // Center the active item in the scroll view
      const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      // Ensure scroll position is within bounds
      const maxScroll = container.scrollWidth - containerWidth;
      const safeScrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
      
      // Scroll to position
      container.scrollTo({
        left: safeScrollPosition,
        behavior: 'smooth'
      });
      
      // Update scroll indicators after the scroll animation
      setTimeout(checkScrollArrows, 300);
    }
  }, [location.pathname]);

  // Return null for mobile view
  if (isMobileOrTablet) {
    return null;
  }

  const isActive = (path) => {
    return location.pathname === path;
  };

  const scrollNav = (direction) => {
    if (navRef.current) {
      setIsScrolling(true);
      navRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
      setTimeout(() => {
        setIsScrolling(false);
        checkScrollArrows();
      }, 300);
    }
  };

  // Find the current section from pathname
  const getCurrentSection = () => {
    const currentPath = location.pathname;
    const currentSection = subNavLinks.find(link => link.path === currentPath);
    return currentSection ? currentSection.section : null;
  };

  const currentSection = getCurrentSection();

  return (
    <nav className="flex flex-col bg-slate-900/90 backdrop-blur-lg border-b border-red-500/30 text-white py-2 px-2 shadow-xl sticky top-0 z-50">
      {/* Current section indicator with subtle animation */}
      {currentSection && (
        <div className="text-sm text-red-400 font-medium mb-1 ml-3 animate-pulse">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-ping"></span>
          {currentSection}
        </div>
      )}
      
      <div className="relative flex items-center">
        {/* Left gradient and button with improved styling */}
        {showLeftArrow && (
          <>
            <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <button
              className={`absolute left-2 w-8 h-8 flex items-center justify-center bg-red-600/80 hover:bg-red-500 text-white rounded-full shadow-lg shadow-red-600/30 z-20 transition-all duration-300 ${
                isScrolling ? "scale-90" : "scale-100"
              }`}
              onClick={() => scrollNav("left")}
              aria-label="Scroll left"
            >
              <FaChevronLeft size={14} />
            </button>
          </>
        )}
        
        {/* Navigation items with enhanced styling */}
        <div
          ref={navRef}
          className="flex space-x-2 overflow-x-auto whitespace-nowrap px-4 py-1 scrollbar-hide w-full ml-16"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {subNavLinks.map((link, index) => {
            const active = isActive(link.path);
            return (
              <Link
                key={index}
                to={link.path}
                ref={active ? activeItemRef : null}
                className={`relative px-4 py-2 font-medium text-sm md:text-base transition-all duration-200 rounded-lg flex items-center ${
                  active
                    ? "bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-600/30"
                    : "text-gray-300 bg-slate-800/50 hover:bg-slate-700/70 hover:text-white border border-slate-700/50"
                }`}
                title={link.description || link.name}
              >
                {link.icon && (
                  <span className={`mr-2 ${active ? "text-white" : "text-red-400"}`}>
                    {link.icon}
                  </span>
                )}
                {link.name}
                {active && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right gradient and button with improved styling */}
        {showRightArrow && (
          <>
            <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
            <button
              className={`absolute right-2 w-8 h-8 flex items-center justify-center bg-red-600/80 hover:bg-red-500 text-white rounded-full shadow-lg shadow-red-600/30 z-20 transition-all duration-300 ${
                isScrolling ? "scale-90" : "scale-100"
              }`}
              onClick={() => scrollNav("right")}
              aria-label="Scroll right"
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default SubNav;