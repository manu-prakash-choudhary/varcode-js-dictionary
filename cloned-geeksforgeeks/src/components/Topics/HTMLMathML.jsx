import React from "react";
import { CopyBlock } from "react-code-blocks";
import {HTMLtr1,} from "../../utils/CodeBlocks";
import {data,} from "../../utils/HTMLTutorialRef";
const HTMLMathML= () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">
        HTML5 MathML Complete Reference
        </h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <h4 className="text-gray-700 mt-5 mb-5">
      The MathML comes in HTML5 the current MathML version is 3 it was introduced in the year 2015. The MathML stands for Mathematics Markup Language. It is used to represent mathematical equations or expressions in web browsers like other HTML elements. The MathML is used to describe mathematics as a basis for the machine to machine communication, it is intended to be handled by specialized authoring tools such as equation editors and it is meaningful to other applications also.
      </h4>
      
      <div className="text-gray-700 mt-5 mb-5">
        <h4 className="text-gray-800 text-lg">
          <b>Example:</b>
        </h4>
        
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLtr1.text}
            language={HTMLtr1.language}
            theme={HTMLtr1.theme}
            wrapLines
          />
        </div>
        <h4 className="text-red-600 font-semibold text-lg">Output:</h4>
        <img src="/HTMLTR/tr1.png" className="h-50 ml-80 w-80"></img>
      </div>
      <div className="overflow-x-auto p-4">
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">MathML Tag</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
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

export default HTMLMathML;
