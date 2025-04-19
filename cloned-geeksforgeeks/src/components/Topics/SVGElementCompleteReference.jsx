import React from "react";
import { CopyBlock } from "react-code-blocks";
import {HTMLtr4,} from "../../../utils/CodeBlocks";
import {data3,} from "../../../utils/HTMLTutorialRef";
const SVGElementCompleteReference = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">
           SVG Element Complete Reference
        </h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <h4 className="text-gray-700 mt-5 mb-5">
      SVG stands for Scalable Vector Graphic. It can be used to make graphics and animations like in HTML canvas. It is a type of vector graphic that may be scaled up or down. Elements are the core things that is required to work with SVGs.
      </h4>
     
      <div className="text-gray-700 mt-5 mb-5">
        <h4 className="text-gray-800 text-lg">
          <b>Example:</b> In this example, we will create a polygon.
        </h4>
        
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLtr4.text}
            language={HTMLtr4.language}
            theme={HTMLtr4.theme}
            wrapLines
          />
        </div>
        <h4 className="text-gray-800 text-lg">
          <b>Output:</b> 
        </h4>
        <img src="/HTMLTR/tr2.png" className="ml-60"></img>
      </div>
      
      <p className="text-gray-700"><b>List of SVG Elements:</b></p>
     
      <div className="overflow-x-auto p-4">
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">SVG Elements</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          {data3.map((item, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">
                <a href="#" className="text-red-600 underline">{item.tag}</a>
              </td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">
                <button className="border px-3 py-1 text-red-600 border-red-600 rounded">Try</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </div>
  );
};

export default SVGElementCompleteReference;
