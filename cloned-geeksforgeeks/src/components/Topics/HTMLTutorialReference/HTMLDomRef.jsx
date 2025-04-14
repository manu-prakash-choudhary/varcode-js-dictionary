import React from "react";
import { CopyBlock } from "react-code-blocks";
import { HTMLtr1, HTMLtr2 } from "../../../utils/CodeBlocks";
import {
  dom1,
  dom2,
  dom3,
  dom4,
  dom5,
  dom6,
  dom7,
  dom8,
  geoLocationProp,
  historyMethods,
  historyProp,
  hcMethods,
  hcProp,
  locationMethods,
  locationProp,
  navigatorMethods,
  navigatorProp,
  screenProp,
  styleProp,
  windowMethods,
  windowProp,
  storageMethods,
  storageProp,
} from "../../../utils/HTMLTutorialRef";
const HTMLDomRef = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">
          HTML DOM Complete Reference
        </h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <h4 className="text-gray-700 mt-5 mb-5">
        <b>HTML DOM (Document Object Model)</b> is a programming interface that
        represents the elements of an HTML document in a tree-like structure.
      </h4>
      <ul className="list-disc ml-6 text-gray-700">
        <li>
          Allows developers to change content and layout using JavaScript.
        </li>
        <li>Enables dynamic updates and user interaction on websites.</li>
        <li>
          Facilitates the addition, removal, or modification of HTML elements.
        </li>
      </ul>
      <div className="text-gray-700 mt-5 mb-5">
        <h4 className="text-gray-800 text-lg">
          <b>Example:</b>
        </h4>

        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLtr2.text}
            language={HTMLtr2.language}
            theme={HTMLtr2.theme}
            wrapLines
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-red-600">
        HTML DOM Attribute Object:
      </h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom1.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.tag}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom2.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.tag}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* console object methods */}
      <h3 className="text-lg font-semibold text-red-600">
        Console Object Methods:
      </h3>

      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom3.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Document Object Properties: */}
      <h3 className="text-lg font-semibold text-red-600">
        Document Object Properties:
      </h3>

      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom4.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* methods */}
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom5.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* collections */}
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Collections:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Collection</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom6.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* property */}
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom7.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* methods */}
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {dom8.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Geolocation Object: */}

      <h3 className="text-lg font-semibold text-red-600">
        Geolocation Object:
      </h3>

      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {geoLocationProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">History Object:</h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {historyMethods.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {historyProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">
        DOM HTMLCollection:
      </h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {hcMethods.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {hcProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">Location Object</h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {locationMethods.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {locationProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">
        The Navigator Object:
      </h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {navigatorMethods.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {navigatorProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">Screen Object:</h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {screenProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">Style Object:</h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {styleProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">Window Object:</h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {windowMethods.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {windowProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">Storage Object:</h3>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Methods:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Methods</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {storageMethods.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.method}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="texl-l text-gray-700 mt-5 mb-5 font-bold">Properties:</h4>
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Properties</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {storageProp.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">
                  <a href="#" className="text-red-600 ">
                    {item.property}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  <button className="border px-3 py-1 text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-red-600">
      Best Practices for HTML DOM
      </h3>
      <ul className="list-disc ml-6 text-gray-700 mt-5 text-lg">
        <li>
          <b>Use getElementById() for Performance:</b> Access elements by their id for faster and more efficient DOM manipulation.
        </li>
        <li>
          <b>Minimize DOM Manipulation:</b> Batch updates to the DOM to reduce reflows and improve performance.
        </li>
        <li>
          <b>Avoid Inline JavaScript:</b> Use external JavaScript files to keep code organized and maintainable.
        </li>
        <li>
          <b>Add Event Listeners Dynamically:</b> Use addEventListener instead of inline event attributes to separate behavior from structure.
        </li>
      </ul>
    </div>
  );
};

export default HTMLDomRef;
