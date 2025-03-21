import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { subNavLinks } from "../../utils/SubNavLinks";

const SubNav = () => {
  const navRef = useRef(null);

  const scrollNav = (direction) => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className=" bg-gray-800 text-white py-2 px-4 shadow-md flex items-center sticky top-0 z-50">
      <button
        className="absolute left-0 px-2 py-1 rounded-md z-10"
        onClick={() => scrollNav("left")}
      >
        <FaChevronLeft size={20} />
      </button>
      <div
        ref={navRef}
        className="flex space-x-4 overflow-x-auto whitespace-nowrap px-10 scrollbar-hide"
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
            className="hover:bg-gray-700 px-4 py-2 rounded-md transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        className="absolute right-0 px-2 py-1 rounded-md z-10"
        onClick={() => scrollNav("right")}
      >
        <FaChevronRight size={20} />
      </button>
    </nav>
  );
};

export default SubNav;
