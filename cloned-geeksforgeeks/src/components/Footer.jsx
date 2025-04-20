import React, { useState } from "react";
import { Link } from "react-router-dom";
import htmlTopics from "../utils/HTMLSidebar";

const Footer = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleSubTopics = (index) => {
    if (expandedTopic === index) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(index);
    }
  };

  const featuredTopics = [
    { title: "HTML Tutorial", link: "/" },
    { title: "HTML Introduction", link: "/html-introduction" },
    { title: "HTML Elements", link: "/html-elements" },
    { title: "HTML Forms", link: "/html-forms" },
    { title: "HTML Tables", link: "/html-tables" },
    { title: "HTML5 Semantics", link: "/html5-semantics" },
  ];

  return (
    <div className="content-container-footer w-full">
      <hr className="text-gray-400" />
      <div className="p-4 md:p-6 lg:p-10 text-gray-500">
        {/* Featured Topics - Horizontal Row */}
        <div className="mb-6 md:mb-8">
          <h3 className="font-bold text-gray-700 mb-3 md:mb-4 text-lg md:text-xl">Popular HTML Topics</h3>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {featuredTopics.map((topic, index) => (
              <Link
                key={index}
                to={topic.link}
                className="px-2 py-1 md:px-3 md:py-1 text-sm md:text-base bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 rounded-md transition duration-200"
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Created By Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="font-bold text-gray-700 mb-3 md:mb-4 text-lg md:text-xl">Created By</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-800 duration-200 cursor-pointer hover:scale-105 font-semibold">
                <Link
                  to="https://www.linkedin.com/in/hariram-gupta-3a659a259"
                  target="_blank"
                >
                  Hariram Gupta
                </Link>
              </li>
              <li className="hover:text-gray-800 duration-200 cursor-pointer hover:scale-105 font-semibold">
                <Link
                  to="https://www.linkedin.com/in/yash-machhi-7b87182b4/"
                  target="_blank"
                >
                  Machhi Yash Ashish
                </Link>
              </li>
              <li className="hover:text-gray-800 duration-200 cursor-pointer hover:scale-105 font-semibold">
                <Link
                  to="https://www.linkedin.com/in/bhanu-vardhan-medapalli"
                  target="_blank"
                >
                  Bhanu Vardhan Medapalli
                </Link>
              </li>
              <li className="hover:text-gray-800 duration-200 cursor-pointer hover:scale-105 font-semibold">
                <Link
                  to="https://www.linkedin.com/in/bhanu-vardhan-medapalli"
                  target="_blank"
                >
                  Sahil Soni
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="font-bold text-gray-700 mb-3 md:mb-4 text-lg md:text-xl">Quick Links</h3>
            <div className="h-48 md:h-64 overflow-y-auto pr-2 md:pr-4">
              <ul className="space-y-1 md:space-y-2">
                {htmlTopics.map((topic, index) => (
                  <li key={index} className="text-sm md:text-base">
                    {topic.subTopics ? (
                      <div>
                        <button
                          className="text-left hover:text-gray-800 font-semibold flex items-center w-full"
                          onClick={() => toggleSubTopics(index)}
                        >
                          {topic.title}
                          <span className="ml-1">
                            {expandedTopic === index ? "▼" : "►"}
                          </span>
                        </button>
                        {expandedTopic === index && (
                          <ul className="pl-3 md:pl-4 mt-1 md:mt-2 space-y-1">
                            {topic.subTopics.map((subTopic, subIndex) => (
                              <li
                                key={subIndex}
                                className="hover:text-gray-800 duration-200 cursor-pointer text-xs md:text-sm"
                              >
                                <Link to={subTopic.link}>{subTopic.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={topic.link}
                        className="hover:text-gray-800 duration-200 cursor-pointer font-semibold"
                      >
                        {topic.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-gray-500">
            <h3 className="font-bold text-gray-700 mb-3 md:mb-4 text-lg md:text-xl">Legal</h3>
            <div className="flex gap-2 md:gap-3 flex-col">
              <p className="text-sm md:text-base">© Varcode Edtech Private Limited, 2024</p>
              <p className="text-sm md:text-base">
                Use of the trademarks, names and logos displayed on the site is not
                permitted without the prior written consent of Varcode Edtech
                Private Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;