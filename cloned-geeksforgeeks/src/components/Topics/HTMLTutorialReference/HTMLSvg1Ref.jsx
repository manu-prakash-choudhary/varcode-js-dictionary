import React from "react";
import { CopyBlock } from "react-code-blocks";
import { HTMLtr4 } from "../../../utils/CodeBlocks";
import { data3 } from "../../../utils/HTMLTutorialRef";

const HTMLSvg1Ref = () => {
  return (
    <div className="content-container overflow-y-auto h-screen px-4 md:px-6 max-w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
          SVG Element Complete Reference
        </h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      
      <h4 className="text-gray-700 mt-4 mb-4 text-sm md:text-base">
        SVG stands for Scalable Vector Graphic. It can be used to make graphics and animations like in HTML canvas. 
        It is a type of vector graphic that may be scaled up or down. Elements are the core things that is required 
        to work with SVGs.
      </h4>
     
      <div className="text-gray-700 mt-4 mb-4">
        <h4 className="text-gray-800 text-base md:text-lg">
          <b>Example:</b> In this example, we will create a polygon.
        </h4>
        
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-4 mb-4 overflow-x-auto">
          <CopyBlock
            text={HTMLtr4.text}
            language={HTMLtr4.language}
            theme={HTMLtr4.theme}
            wrapLines
          />
        </div>
        
        <h4 className="text-gray-800 text-base md:text-lg">
          <b>Output:</b> 
        </h4>
        
        <div className="flex justify-center md:justify-start">
          <img 
            src="/HTMLTR/tr2.png" 
            alt="Polygon SVG example" 
            className="max-w-full h-auto md:ml-6 mt-2"
          />
        </div>
      </div>
      
      <p className="text-gray-700 mt-6 mb-2"><b>List of SVG Elements:</b></p>
     
      <div className="overflow-x-auto py-2 px-0 md:p-4">
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 md:px-4 py-1 md:py-2">SVG Elements</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Description</th>
              {/* <th className="border px-2 md:px-4 py-1 md:py-2">Example</th> */}
            </tr>
          </thead>
          <tbody>
            {data3.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-2 md:px-4 py-1 md:py-2">
                  <a href="#" className="text-red-600">{item.tag}</a>
                </td>
                <td className="border px-2 md:px-4 py-1 md:py-2">{item.description}</td>
                {/* <td className="border px-2 md:px-4 py-1 md:py-2">
                  <button className="border px-2 md:px-3 py-1 text-red-600 border-red-600 rounded text-sm">Try</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HTMLSvg1Ref;