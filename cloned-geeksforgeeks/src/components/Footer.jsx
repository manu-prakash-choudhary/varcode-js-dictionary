import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="content-container-footer">
      <hr className="text-gray-400" />
      <div className="min-h-20 flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10 text-gray-500 gap-6">
        <div>
          <p className="font-semibold mb-2">Created By -</p>
          <ul className="space-y-1">
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
        <div className="text-gray-500 md:w-2/6 w-full flex flex-col gap-2 text-sm">
          <p>© Varcode Edtech Private Limited, 2024</p>
          <p>
            Use of the trademarks, names and logos displayed on the site is not
            permitted without the prior written consent of Varcode Edtech
            Private Limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
