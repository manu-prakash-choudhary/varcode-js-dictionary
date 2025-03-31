import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./Sidebar.css";
import htmlTopics from "../../utils/HTMLSidebar";

const Sidebar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleNavigation = (link, title) => {
    navigate(link);
    setActiveItem(title);
  };

  return (
    <div className="py-3 pl-0 pr-0 min-w-40 w-[20%] border-r border-gray-200 h-screen bg-white sidebar mt-[58px]">
      <h2 className="p-2 text-2xl font-bold text-red-600 border-b border-gray-300 sticky top-0 bg-white">
        varCODE HTML Tutorial
      </h2>

      <div className="h-[calc(100vh-50px)] overflow-y-auto custom-scrollbar p-1">
        <ul className="space-y-2 w-full hover:cursor-pointer">
          {htmlTopics && htmlTopics.length > 0 ? (
            htmlTopics.map((topic, index) => (
              <li key={index}>
                {topic.subTopics ? (
                  <div className=" border-b-1 border-gray-400">
                    <div 
                      className={`flex justify-between items-center cursor-pointer font-semibold p-2 rounded transition-all ${openMenu === topic.title ? 'bg-red-200 ' : 'bg-gray-100'}`}
                      onClick={() => toggleMenu(topic.title)}
                    >
                      {topic.title}
                      {openMenu === topic.title ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    {openMenu === topic.title && (
                      <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                        {topic.subTopics.map((subTopic, subIndex) => (
                          <li 
                            key={subIndex} 
                            className={`p-1 cursor-pointer transition-all ${activeItem === subTopic.title ? 'bg-red-200  font-semibold' : 'hover:bg-red-200 hover:font-medium'}`}
                            onClick={() => handleNavigation(subTopic.link, subTopic.title)}
                          >
                            {subTopic.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div
                    className={`p-2 cursor-pointer transition-all ${activeItem === topic.title ? 'bg-red-200  font-semibold' : 'hover:bg-red-200 hover:font-medium'}`}
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
  );
};

export default Sidebar;