import React from "react";
import { CopyBlock } from "react-code-blocks";
import { HTMLtr1 } from "../../../utils/CodeBlocks";
import { data } from "../../../utils/HTMLTutorialRef";

const HTMLMathML = () => {
  return (
    <div className="content-container overflow-y-auto h-screen px-4 md:px-6 max-w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
          HTML5 MathML Complete Reference
        </h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      
      <div className="text-sm md:text-base text-gray-700 my-4 md:my-5">
        The MathML comes in HTML5 the current MathML version is 3 it was introduced in the year 2015. 
        The MathML stands for Mathematics Markup Language. It is used to represent mathematical equations 
        or expressions in web browsers like other HTML elements. The MathML is used to describe mathematics 
        as a basis for the machine to machine communication, it is intended to be handled by specialized authoring 
        tools such as equation editors and it is meaningful to other applications also.
      </div>
      
      <div className="text-gray-700 my-4 md:my-5">
        <h4 className="text-base md:text-lg text-gray-800 font-medium">
          <b>Example:</b>
        </h4>
        
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-32 md:min-h-40 bg-[#fafafa] my-3 md:my-5">
          <CopyBlock
            text={HTMLtr1.text}
            language={HTMLtr1.language}
            theme={HTMLtr1.theme}
            wrapLines
          />
        </div>
        
        <h4 className="text-base md:text-lg text-red-600 font-semibold">Output:</h4>
        <div className="flex justify-center md:justify-start">
          <img 
            src="/HTMLTR/tr1.png" 
            alt="MathML example output" 
            className="h-40 w-40 md:h-50 md:w-80 object-contain"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto py-2 md:p-4">
        <table className="min-w-full border border-gray-300 text-left text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 md:px-4 py-1 md:py-2">MathML Tag</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Description</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-2 md:px-4 py-1 md:py-2 whitespace-nowrap">
                  <a href="#" className="text-red-600">{item.tag}</a>
                </td>
                <td className="border px-2 md:px-4 py-1 md:py-2">{item.description}</td>
                <td className="border px-2 md:px-4 py-1 md:py-2 text-center">
                  <button className="border px-2 md:px-3 py-1 text-red-600 border-red-600 rounded text-xs md:text-sm">Try</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HTMLMathML;