import React from "react";
import { FaAngleRight } from 'react-icons/fa';


const SVGAttributeCompleteReference = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">SVG Attribute Complete Reference</h1>
        <p className="text-gray-600">Last Updated : 19 Apr, 2025</p>
      </div>
      <br/>
      <p></p>

    <div className="min-h-20 mt-5 w-full  ">
                <div className="flex justify-between items-center ml-5 pb-0 pt-0">
                    <div></div>
                    <div>
                        <button className="text-lg border border-red-400 flex items-center rounded-2xl p-4 font-semibold hover:scale-95 duration-200 hover:text-gray-800 cursor-pointer">
                            Next Article
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
      </div>

  </div>
  );
};

export default SVGAttributeCompleteReference;
