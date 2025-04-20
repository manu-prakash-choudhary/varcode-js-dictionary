import React from "react";
import { CopyBlock } from "react-code-blocks";
import { tf1, tf2 } from "../../utils/CodeBlocks";

const HTMLTextFormatting = () => {
  return (
    <div className="content-container overflow-y-auto h-full px-4 md:px-6 max-w-full">
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-red-600">
          HTML Text Formatting
        </h1>
        <p className="text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      
      <h4 className="text-gray-700 my-5">
        HTML text formatting refers to the use of specific HTML tags to modify
        the appearance and structure of text on a webpage. It allows you to
        style text in different ways, such as making it bold, italic,
        highlighted, or struck-through.
      </h4>
      
      <h3 className="text-xl md:text-2xl font-semibold text-red-600">Table of contents</h3>
      <ul className="list-disc ml-4 md:ml-6 mt-2">
        <li className="mt-2 text-red-600">
          <a href="#1">Categories of HTML Text Formatting</a>
          <ul className="list-disc ml-4 md:ml-6 mt-2">
            <li>Logical Tags</li>
            <li>Physical Tags</li>
          </ul>
        </li>
        <li className="mt-2 text-red-600">
          <a href="#2">HTML Formatting Elements</a>
        </li>
        <li className="mt-2 text-red-600">
          <a href="#3">Examples of HTML Text Formatting</a>
          <ul className="list-disc ml-4 md:ml-6 mt-2">
            <li>Basic Text Formatting</li>
            <li>Combining Logical and Physical Tags</li>
          </ul>
        </li>
      </ul>
      
      <div id="1" className="text-2xl md:text-3xl font-semibold mb-4 text-red-600 mt-5">
        Categories of HTML Text Formatting
      </div>
      <p className="mb-6">
        HTML text formatting can be divided into two main categories:{" "}
        <span className="font-bold">Logical Tags</span> and{" "}
        <span className="font-bold">Physical Tags</span>.
      </p>

      <div className="text-xl md:text-2xl font-bold mb-3">1. Logical Tags</div>
      <p className="mb-4">
        Logical tags convey the meaning or importance of the text without
        necessarily altering its visual appearance. These tags help browsers,
        search engines, and assistive technologies understand the purpose of the
        text.
      </p>

      <ul className="list-disc pl-4 md:pl-8 mb-6">
        <li className="mb-2">
          <a href="#" className="text-red-600">
            &lt;em&gt;
          </a>
          : Emphasizes text, typically rendered in italics. It implies that the
          text carries special importance or requires emphasis.
        </li>
        <li className="mb-2">
          <a href="#" className="text-red-600">
            &lt;strong&gt;
          </a>
          : Marks text as important, often displayed in bold. It implies the
          content is of strong importance.
        </li>
      </ul>

      <div className="text-xl md:text-2xl font-bold mb-3">2. Physical Tags</div>
      <p className="mb-4">
        Physical tags directly affect how text looks on the webpage by changing
        the font, size, or style.
      </p>

      <ul className="list-disc pl-4 md:pl-8">
        <li className="mb-2">
          <a href="#" className="text-red-600">
            &lt;b&gt;
          </a>
          : Displays text in bold without implying importance.
        </li>
        <li className="mb-2">
          <a href="#" className="text-red-600">
            &lt;i&gt;
          </a>
          : Italicizes text without any implied emphasis.
        </li>
      </ul>
      
      <div className="text-base md:text-lg mb-6 mt-6">
        Here's a list of commonly used HTML text formatting tags and their
        description:
      </div>

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

      <div id="2" className="text-xl md:text-2xl font-bold mb-6 text-red-600">
        HTML Formatting Elements
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          1. &lt;i&gt; – Italicizes text
        </div>
        <p className="text-gray-700 mb-2">
          Use the <span className="text-blue-500">&lt;i&gt;</span> tag to
          display text in italics without implying emphasis.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>&lt;i&gt;This is italic text.&lt;/i&gt;</code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          2. &lt;small&gt; – Reduces the font size of the text
        </div>
        <p className="text-gray-700 mb-2">
          The <span className="text-blue-500">&lt;small&gt;</span> tag renders
          text in a smaller font than the surrounding text.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>
            &lt;small&gt;This text is smaller than the rest.&lt;/small&gt;
          </code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          3. &lt;ins&gt; – Highlights inserted text
        </div>
        <p className="text-gray-700 mb-2">
          The <span className="text-blue-500">&lt;ins&gt;</span> tag marks text
          as newly added or inserted, often displayed with an underline.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>&lt;ins&gt;This is inserted text.&lt;/ins&gt;</code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          4. &lt;sub&gt; – Displays subscript text
        </div>
        <p className="text-gray-700 mb-2">
          Use the <span className="text-blue-500">&lt;sub&gt;</span> tag for
          subscripted text, often used in chemical formulas or footnotes.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>H&lt;sub&gt;2&lt;/sub&gt;O</code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          5. &lt;strong&gt; – Emphasizes important text, often rendered in bold
        </div>
        <p className="text-gray-700 mb-2">
          The <span className="text-blue-500">&lt;strong&gt;</span> tag is
          semantically meaningful and indicates that the text is of high
          importance.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>
            &lt;strong&gt;This text is bold and important.&lt;/strong&gt;
          </code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          6. &lt;b&gt; – Makes text bold
        </div>
        <p className="text-gray-700 mb-2">
          The <span className="text-blue-500">&lt;b&gt;</span> tag visually
          makes the text bold but does not imply any special significance.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>&lt;b&gt;This is bold text.&lt;/b&gt;</code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          7. &lt;mark&gt; – Highlights text with a background color
        </div>
        <p className="text-gray-700 mb-2">
          The <span className="text-blue-500">&lt;mark&gt;</span> tag highlights
          text with a background color, similar to using a highlighter on paper.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>&lt;mark&gt;This text is highlighted.&lt;/mark&gt;</code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          8. &lt;del&gt; – Strikes through text
        </div>
        <p className="text-gray-700 mb-2">
          The <span className="text-blue-500">&lt;del&gt;</span> tag is used to
          show that text has been deleted or is no longer relevant.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>&lt;del&gt;This text is crossed out.&lt;/del&gt;</code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          9. &lt;em&gt; – Emphasizes text, typically italicized
        </div>
        <p className="text-gray-700 mb-2">
          The <span className="text-blue-500">&lt;em&gt;</span> tag is used for
          emphasized text and is usually rendered in italics to highlight
          importance.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>&lt;em&gt;This text is emphasized.&lt;/em&gt;</code>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-lg md:text-xl font-semibold mb-2 text-red-600">
          10. &lt;sup&gt; – Displays superscript text
        </div>
        <p className="text-gray-700 mb-2">
          Use the <span className="text-blue-500">&lt;sup&gt;</span> tag to show
          superscripted text, commonly used in exponents or footnotes.
        </p>
        <div className="bg-gray-200 p-3 md:p-4 rounded-md">
          <code>E = mc&lt;sup&gt;2&lt;/sup&gt;</code>
        </div>
      </div>

      <h3 id="3" className="text-xl md:text-2xl font-semibold text-red-600">
        Examples of HTML Text Formatting
      </h3>
      
      <div className="text-gray-700 my-5">
        <h4 className="text-gray-800 text-lg">
          <b>Example 1:</b> Basic Text Formatting
        </h4>
        <p className="text-base my-5">
          In this example we demonstrates various text formatting tags:
          &lt;strong&gt;for important and bold text, &lt;em&gt; for emphasized
          and italic text, &lt;b&gt; for bold text, &lt;i&gt; for italic text,
          and &lt;mark&gt; for highlighted text.
        </p>
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa] my-5 overflow-x-auto">
          <CopyBlock
            text={tf1.text}
            language={tf1.language}
            theme={tf1.theme}
            wrapLines
          />
        </div>
        
        <h4 className="text-red-600 font-semibold text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start my-4">
          <img 
            src="/tf/t1.png" 
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
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa] my-5 overflow-x-auto">
          <CopyBlock
            text={tf2.text}
            language={tf2.language}
            theme={tf2.theme}
            wrapLines
          />
        </div>
        
        <h4 className="text-red-600 font-semibold text-lg">Output:</h4>
        <div className="flex justify-center md:justify-start my-4">
          <img 
            src="/tf/t2.png" 
            alt="Output of Example 2" 
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HTMLTextFormatting;