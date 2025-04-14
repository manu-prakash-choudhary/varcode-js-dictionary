import React from "react";
import { CopyBlock } from "react-code-blocks";
import { HTMLQ1, HTMLQ2 } from "../../utils/CodeBlocks";

const HTMLQuotations = () => {
  return (
    <div className="content-container overflow-y-auto h-full px-4 md:px-6 max-w-full">
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-red-600">
          HTML Quotations
        </h1>
        <p className="text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      
      <h4 className="text-gray-700 my-5">
        <b>The HTML Quotation elements</b> are used to insert quoted texts in a web page, that is the portion of texts different from the normal texts in the web page. Below are some of the most used quotation elements of the HTML.
      </h4>
      
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <td className="border p-2 md:p-3 font-semibold">Tags</td>
              <td className="border p-2 md:p-3 font-semibold">Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;i&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">Showcases italicized text.</td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;small&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">Renders text in a smaller font size.</td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;ins&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">Highlights added or inserted text.</td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;sub&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">Creates subscript text.</td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;strong&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">
                Emphasizes text with importance, often in bold.
              </td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;b&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">Displays text in a bold format.</td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;mark&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">
                Accentuates text with a background highlight.
              </td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;del&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">
                Strikes through text to signify deletion.
              </td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;em&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">
                Adds emphasis to text, commonly styled as italic.
              </td>
            </tr>
            <tr>
              <td className="border p-2 md:p-3">
                <a href="#" className="text-red-600">
                  &lt;sup&gt;
                </a>
              </td>
              <td className="border p-2 md:p-3">Formats text as superscript.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-red-600">
        HTML Quotations Examples
      </h3>
      
      <div className="text-gray-700 my-5">
        <h4 className="text-gray-800 text-lg">
          <b>Example 1:</b> 
        </h4>
        <p className="text-base my-5">
          In this example, we demonstrate the use of HTML Quotations in which &lt;bdo&gt; adjusts text directionality. &lt;abbr&gt; clarifies the abbreviation "GfG" with its full title. &lt;address&gt; displays contact information. These elements enhance content organization and readability.
        </p>
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa] my-5">
          <CopyBlock
            text={HTMLQ1.text}
            language={HTMLQ1.language}
            theme={HTMLQ1.theme}
            wrapLines
          />
        </div>
        
        <h4 className="text-red-600 font-semibold text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start my-4">
          <img 
            src="/tf/q1.png" 
            alt="Output of Example 1" 
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
      
      <div className="text-gray-700 my-5">
        <h4 className="text-gray-800 text-lg">
          <b>Example 2:</b> Combining Logical and Physical Tags
        </h4>
        <p className="text-base my-5">
          This example shows how logical and physical tags can be combined for enhanced text formatting:
        </p>
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa] my-5">
          <CopyBlock
            text={HTMLQ2.text}
            language={HTMLQ2.language}
            theme={HTMLQ2.theme}
            wrapLines
          />
        </div>
        
        <h4 className="text-red-600 font-semibold text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start my-4">
          <img 
            src="/tf/q2.png" 
            alt="Output of Example 2" 
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HTMLQuotations;