import React from "react";
import { CopyBlock } from "react-code-blocks";
import {HTMLtr1, HTMLtr2, HTMLtr3} from "../../../utils/CodeBlocks";
import {data1, data2} from "../../../utils/HTMLTutorialRef";

const HTMLAVRef = () => {
  return (
    <div className="content-container overflow-y-auto h-screen px-4 md:pl-6">
      <div className="flex flex-col gap-2 md:gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
          HTML DOM Audio/Video Complete Reference
        </h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      
      <h4 className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5 text-sm md:text-base">
        HTML DOM Audio/Video properties and methods allow developers to control audio and video elements programmatically.
      </h4>
      
      <ul className="list-disc ml-4 md:ml-6 text-sm md:text-base text-gray-700">
        <li>These controls include playing, pausing, stopping, and adjusting volume.</li>
        <li>DOM methods enable dynamic interaction and customization of media elements.</li>
        <li>They enhance the user experience by offering seamless media functionality.</li>
      </ul>
      
      <div className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5">
        <h4 className="text-gray-800 text-base md:text-lg">
          <b>Example:</b>
        </h4>
        
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5">
          <CopyBlock
            text={HTMLtr3.text}
            language={HTMLtr3.language}
            theme={HTMLtr3.theme}
            wrapLines
          />
        </div>
      </div>
      
      <ul className="list-disc ml-4 md:ml-6 text-sm md:text-base text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5">
        <li><b>Audio Element:</b> The &lt;audio&gt; tag adds audio playback with controls for the user.</li>
        <li><b>Video Element:</b> The &lt;video&gt; tag displays a video with controls for play, pause, and volume.</li>
      </ul>
      
      <p className="text-sm md:text-base text-gray-700">The complete list of HTML DOM Audio/Video methods and properties is given below:</p>
      
      <h4 className="text-base md:text-lg text-gray-700 mt-4 md:mt-5 mb-3 md:mb-5 font-bold">HTML Audio/Video Methods:</h4>
      
      <div className="overflow-x-auto py-2 px-0 md:p-4">
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 md:px-4 py-1 md:py-2">Audio/Video Methods</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Description</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-2 md:px-4 py-1 md:py-2">
                  <a href="#" className="text-red-600">{item.tag}</a>
                </td>
                <td className="border px-2 md:px-4 py-1 md:py-2">{item.description}</td>
                <td className="border px-2 md:px-4 py-1 md:py-2">
                  <button className="border px-2 md:px-3 py-1 text-xs md:text-sm text-red-600 border-red-600 rounded">Try</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <h4 className="text-base md:text-lg text-gray-700 mt-4 md:mt-5 mb-3 md:mb-5 font-bold">HTML Audio/Video Properties:</h4>
      
      <div className="overflow-x-auto py-2 px-0 md:p-4">
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 md:px-4 py-1 md:py-2">Audio/Video Properties</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Description</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-2 md:px-4 py-1 md:py-2">
                  <a href="#" className="text-red-600">{item.tag}</a>
                </td>
                <td className="border px-2 md:px-4 py-1 md:py-2">{item.description}</td>
                <td className="border px-2 md:px-4 py-1 md:py-2">
                  <button className="border px-2 md:px-3 py-1 text-xs md:text-sm text-red-600 border-red-600 rounded">Try</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <h3 className="text-lg font-semibold text-red-600 mt-4 md:mt-6">Best Practices for HTML DOM Audio/Video</h3>
      
      <ul className="list-disc ml-4 md:ml-6 text-sm md:text-base lg:text-lg text-gray-700 mt-3 md:mt-5">
        <li><b>Use Multiple Formats:</b> Provide audio and video files in various formats (e.g., MP4, WebM, Ogg) to ensure compatibility across different browsers.</li>
        <li><b>Include Fallback Content:</b> Add alternative text or links within &lt;audio&gt; and &lt;video&gt; tags for browsers that do not support these elements.</li>
        <li><b>Implement Custom Controls:</b> Utilize JavaScript to create custom playback controls, enhancing accessibility and providing a consistent user experience across browsers.</li>
        <li><b>Optimize File Sizes:</b> Compress media files to reduce loading times, improving performance without compromising quality.</li>
      </ul>
    </div>
  );
};

export default HTMLAVRef;