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
  // Table component to reduce repetition
  const ReferenceTable = ({ title, data, keyField = "tag", descField = "description" }) => (
    <>
      {title && (
        <h4 className="text-base md:text-lg text-gray-700 mt-4 md:mt-5 mb-3 md:mb-5 font-bold">
          {title}
        </h4>
      )}
      <div className="overflow-x-auto py-2 px-0 md:p-4">
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 md:px-4 py-1 md:py-2">{title?.includes("Methods") ? "Methods" : "Properties"}</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Description</th>
              <th className="border px-2 md:px-4 py-1 md:py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-2 md:px-4 py-1 md:py-2">
                  <a href="#" className="text-red-600">
                    {item[keyField] || item.method || item.property}
                  </a>
                </td>
                <td className="border px-2 md:px-4 py-1 md:py-2">{item[descField]}</td>
                <td className="border px-2 md:px-4 py-1 md:py-2">
                  <button className="border px-2 md:px-3 py-1 text-xs md:text-sm text-red-600 border-red-600 rounded">
                    Try
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <div className="content-container overflow-y-auto h-screen px-3 md:px-6 max-w-full">
      <div className="flex flex-col gap-2 md:gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
          HTML DOM Complete Reference
        </h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      
      <h4 className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5 text-sm md:text-base">
        <b>HTML DOM (Document Object Model)</b> is a programming interface that
        represents the elements of an HTML document in a tree-like structure.
      </h4>
      
      <ul className="list-disc ml-4 md:ml-6 text-sm md:text-base text-gray-700">
        <li>
          Allows developers to change content and layout using JavaScript.
        </li>
        <li>Enables dynamic updates and user interaction on websites.</li>
        <li>
          Facilitates the addition, removal, or modification of HTML elements.
        </li>
      </ul>
      
      <div className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-5">
        <h4 className="text-gray-800 text-base md:text-lg">
          <b>Example:</b>
        </h4>

        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5">
          <CopyBlock
            text={HTMLtr2.text}
            language={HTMLtr2.language}
            theme={HTMLtr2.theme}
            wrapLines
          />
        </div>
      </div>
      
      <h3 className="text-base md:text-lg font-semibold text-red-600">
        HTML DOM Attribute Object:
      </h3>
      
      <ReferenceTable title="Methods:" data={dom1} />
      <ReferenceTable title="Properties:" data={dom2} />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Console Object Methods:
      </h3>
      
      <ReferenceTable data={dom3} keyField="method" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Document Object Properties:
      </h3>
      
      <ReferenceTable data={dom4} keyField="property" />
      <ReferenceTable title="Methods:" data={dom5} keyField="method" />
      <ReferenceTable title="Collections:" data={dom6} keyField="property" />
      <ReferenceTable title="Properties:" data={dom7} keyField="property" />
      <ReferenceTable title="Methods:" data={dom8} keyField="method" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Geolocation Object:
      </h3>
      
      <ReferenceTable title="Properties:" data={geoLocationProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        History Object:
      </h3>
      
      <ReferenceTable title="Methods:" data={historyMethods} keyField="method" />
      <ReferenceTable title="Properties:" data={historyProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        DOM HTMLCollection:
      </h3>
      
      <ReferenceTable title="Methods:" data={hcMethods} keyField="method" />
      <ReferenceTable title="Properties:" data={hcProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Location Object:
      </h3>
      
      <ReferenceTable title="Methods:" data={locationMethods} keyField="method" />
      <ReferenceTable title="Properties:" data={locationProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        The Navigator Object:
      </h3>
      
      <ReferenceTable title="Methods:" data={navigatorMethods} keyField="method" />
      <ReferenceTable title="Properties:" data={navigatorProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Screen Object:
      </h3>
      
      <ReferenceTable title="Properties:" data={screenProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Style Object:
      </h3>
      
      <ReferenceTable title="Properties:" data={styleProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Window Object:
      </h3>
      
      <ReferenceTable title="Methods:" data={windowMethods} keyField="method" />
      <ReferenceTable title="Properties:" data={windowProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Storage Object:
      </h3>
      
      <ReferenceTable title="Methods:" data={storageMethods} keyField="method" />
      <ReferenceTable title="Properties:" data={storageProp} keyField="property" />

      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Best Practices for HTML DOM
      </h3>
      
      <ul className="list-disc ml-4 md:ml-6 text-sm md:text-base lg:text-lg text-gray-700 mt-3 md:mt-5 mb-6">
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