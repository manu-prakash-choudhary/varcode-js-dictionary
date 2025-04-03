import React from "react";
import { CopyBlock } from "react-code-blocks";
import {HTMLtr1, HTMLtr2,HTMLtr3} from "../../../utils/CodeBlocks";
import {data1,data2,} from "../../../utils/HTMLTutorialRef";
const HTMLAVRef= () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">
        HTML DOM Audio/Video Complete Reference
        </h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <h4 className="text-gray-700 mt-5 mb-5">
      HTML DOM Audio/Video properties and methods allow developers to control audio and video elements programmatically.
      </h4>
      <ul className="list-disc ml-6 text-gray-700">
        <li>These controls include playing, pausing, stopping, and adjusting volume.</li>
        <li>DOM methods enable dynamic interaction and customization of media elements.</li>
        <li>They enhance the user experience by offering seamless media functionality.</li>
       </ul>
      <div className="text-gray-700 mt-5 mb-5">
        <h4 className="text-gray-800 text-lg">
          <b>Example:</b>
        </h4>
        
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLtr3.text}
            language={HTMLtr3.language}
            theme={HTMLtr3.theme}
            wrapLines
          />
        </div>
      </div>
      <ul className="list-disc ml-6 text-gray-700 mt-5 mb-5">
        <li><b>Audio Element:</b> The &lt;audio&gt; tag adds audio playback with controls for the user.</li>
        <li><b>Video Element:</b> The &lt;video&gt; tag displays a video with controls for play, pause, and volume.</li>
      </ul>
      <p className="text-gray-700">The complete list of HTML DOM Audio/Video methods and properties is given below:</p>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">HTML Audio/Video Methods:</h4>
      <div className="overflow-x-auto p-4">
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Audio/Video Methods</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
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
    <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">HTML Audio/Video Properties:</h4>
    <div className="overflow-x-auto p-4">
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Audio/Video Properties</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index) => (
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
    <h3 className="text-lg font-semibold text-red-600">Best Practices for HTML DOM Audio/Video</h3>
    <ul className="list-disc ml-6 text-gray-700 mt-5 text-lg">
        <li><b>Use Multiple Formats:</b> Provide audio and video files in various formats (e.g., MP4, WebM, Ogg) to ensure compatibility across different browsers.</li>
        <li><b>Include Fallback Content:</b> Add alternative text or links within &lt;audio&gt; and &lt;video&gt; tags for browsers that do not support these elements.</li>
        <li><b>Implement Custom Controls:</b> Utilize JavaScript to create custom playback controls, enhancing accessibility and providing a consistent user experience across browsers.</li>
        <li><b>Optimize File Sizes:</b> Compress media files to reduce loading times, improving performance without compromising quality.</li>
    </ul>
    </div>
  );
};

export default HTMLAVRef;
