import React from "react";
import { CopyBlock } from "react-code-blocks";
import { HTMLElementEx,HTMLNested,HTMLEmpty} from "../../utils/CodeBlocks";
const HTMLElements = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">HTML Elements</h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <div className="pl-0 mt-4">
        <p className="text-gray-800 text-justify">
        An HTML Element consists of a <b>start tag</b>, <b>content</b>, and an <b>end tag</b>, which together define the elements structure and functionality. Elements are the basic building blocks of a webpage and can represent different types of content, such as text, links, images, or headings.
        </p>
        <br></br>
        <p className="text-gray-800 text-justify">
        For example, the &lt;p&gt;   element for paragraphs includes opening and closing tags with text content in between.
        </p>
        <div className="mt-6 p-4 border rounded-lg shadow bg-white text-center">
          
          <p className="text-red-600 text-lg font-bold">
            &lt;p&gt; varCODE eduTECH &lt;/p&gt;
          </p>

         
          <div className="mt-4 flex justify-between items-center text-red-600 text-sm relative">
            
            <div className="flex flex-col items-center">
              <span>&lt;p&gt;</span>
              <div className="w-0.5 h-6 bg-gray-600"></div>
              <span>Opening Tag</span>
            </div>

           
            <div className="flex flex-col items-center">
              <span className="text-red-600">GeeksforGeeks</span>
              <div className="w-0.5 h-6 bg-gray-600"></div>
              <span>Content</span>
            </div>

            
            <div className="flex flex-col items-center">
              <span>&lt;/p&gt;</span>
              <div className="w-0.5 h-6 bg-gray-600"></div>
              <span>Closing Tag</span>
            </div>
          </div>

          
          <div className="relative mt-4 flex items-center">
            <div className="w-full h-0.5 bg-gray-600"></div>
            <span className="absolute left-0 -top-3">⬅</span>
            <span className="absolute right-0 -top-3">➡</span>
          </div>

          
          <div className="mt-3 text-red-600">Element</div>
        </div>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>
            It defines the structure of a webpage using elements and tags.
          </li>
          <li>
            HTML is responsible for displaying text, images, and other content.
          </li>
          <li>
            It serves as the foundation for building websites and web
            applications.
          </li>
        </ul>
        <br></br>

        <p className="text-gray-800 text-justify">
          In this guide, we learn the basics of HTML which includes HTML tags (
          &lt;h1&gt;, &lt;p&gt;, &lt;img&gt;, etc), attributes, elements, and
          document structure which collectively form a working web page.
        </p>
      </div>
      <br></br>
      <br></br>
      <h3 className="text-xl font-semibold text-red-600">Syntax:</h3>
      <div className="bg-gray-200 text-gray-800 p-3 rounded-md font-mono mt-5">
        &lt;tagname&gt;Your Contents... &lt;/tagname&gt;
      </div>
      <h3 className="text-xl font-semibold text-red-600 mt-6">
        HTML Element Code Example:
      </h3>
      <p className="text-gray-700 mt-2">
        In this example, <code className="text-green-600">&lt;p&gt;</code> is a
        starting tag, <code className="text-green-600">&lt;/p&gt;</code> is an
        ending tag, and it contains some content between the tags, which form an
        element.
      </p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
         <CopyBlock
                    text={HTMLElementEx.text}
                    language={HTMLElementEx.language}
                    theme={HTMLElementEx.theme}
                    wrapLines
                  />
      </div>

      <h3 className="text-2xl font-semibold text-red-600">Table of contents</h3>
      <ul className="list-disc ml-6 mt-2">
        <li className="mt-2 text-red-600 underline">
          <a href="#1">Some Key Points About HTML Elements</a>
        </li>
        <li className="mt-2 text-red-600 underline">
          <a href="#2">Nested HTML Elements</a>
        </li>
        <li className="mt-2 text-red-600 underline">
          <a href="#3">Necessary to Add an End Tag</a>
        </li>
        <li className="mt-2 text-red-600 underline">
          <a href="#4">HTML Empty Element</a>
        </li>
        <li className="mt-2 text-red-600 underline">
          <a href="#5">Block-Level Elements and Inline Elements</a>
        </li>
        <li className="mt-2 text-red-600 underline">
          <a href="#6">Best Practices When Using HTML Elements</a>
        </li>
      </ul>
      <br></br>
      <h3 className="text-xl font-semibold text-red-600 mt-5">
      Some Key Points About HTML Elements
      </h3>
      <h4 className="font-semibold text-red-600 mt-4">1. Syntax:</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>An opening tag indicates where the content begins: <code className="font-mono">&lt;tagname&gt;</code>.</li>
        <li>A closing tag indicates where the content ends: <code className="font-mono">&lt;/tagname&gt;</code>.</li>
        <li>The actual content resides between the opening and closing tags.</li>
      </ul>
      <h4 className="font-semibold text-red-600 mt-4">2. Case Sensitivity:</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>HTML tags are <strong>not</strong> case-sensitive. For example, <code className="font-mono">&lt;B&gt;</code> and <code className="font-mono">&lt;b&gt;</code> both represent bold text.</li>
        <li>However, it’s a best practice to use lowercase tags for consistency and readability.</li>
      </ul>
      <h3 className="text-xl font-semibold text-red-600 mt-6">
      Nested HTML Elements
      </h3>
      <p className="text-gray-700 mt-2">
        Nested HTML Elements occur when one element is placed inside another, creating a hierarchical structure. 
        This structure is crucial for organizing content on web pages effectively, ensuring that different elements relate logically and visually to each other.
      </p>
      <p className="text-gray-700 mt-2">
        <strong>Example:</strong> Here, the <code className="text-red-600">&lt;html&gt;</code> tag contains the <code className="text-red-600">&lt;head&gt;</code> and <code className="text-red-600">&lt;body&gt;</code> tags, forming a nested structure.
      </p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
         <CopyBlock
                    text={HTMLNested.text}
                    language={HTMLNested.language}
                    theme={HTMLNested.theme}
                    wrapLines
                  />
      </div>
      <p className="text-gray-700 mt-2">
      Here, the &lt;html&gt; tag contains the &lt;head&gt; and &lt;body&gt;. The &lt;head&gt; and &lt;body&gt; tag contain other elements so it is called a nested element.
      </p>
      <h3 className="text-xl font-semibold text-red-600 mt-6">
      Necessary to Add an End Tag
      </h3>
      <p className="text-gray-700 mt-2">
      For non-empty HTML elements, if you forget to add a closing or end tag, modern browsers may automatically add it in some cases.
      <br></br>
      <br></br>
      However, this can cause issues when you add additional HTML elements later on. Therefore, it is best practice to always include the closing tag for non-void HTML elements.
      </p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
         <CopyBlock
                    text={HTMLNested.text}
                    language={HTMLNested.language}
                    theme={HTMLNested.theme}
                    wrapLines
                  />
      </div>
      <h3 className="text-xl font-semibold text-red-600 mt-6">
      HTML Empty Element
      </h3>
      <h4 className="text-l text-gray-700 mt-2">HTML Elements without any content i.e., that do not print anything are called Empty elements. Empty HTML elements do not have an ending tag.<br></br>For instance. &lt;br&gt;, &lt;hr&gt;, &lt;link&gt;, &lt;input&gt; etc are HTML elements.</h4>
      <p className="text-gray-700 mt-3"><b>Example:</b>In this example &lt;br&gt; tag doesn&#39;t print anything. It is used as a line break that breaks the line between &lt;h2&gt; and &lt;p&gt;tags.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
         <CopyBlock
                    text={HTMLEmpty.text}
                    language={HTMLEmpty.language}
                    theme={HTMLEmpty.theme}
                    wrapLines
                  />
      </div>
      <h3 className="text-lg font-semibold text-red-600">Block-Level Elements and Inline Elements</h3>
      <p className="text-gray-700 mt-2">
        In HTML, elements are broadly categorized into two main types based on how they display in the document layout: block-level elements and inline elements.
      </p>

      <h4 className="font-bold text-gray-800 mt-6">1. Block-Level Elements</h4>
      <p className="text-gray-700 mt-2">
        Block-level elements typically start on a new line and take up the full width available to them, regardless of their actual content width. This means they stack vertically and can contain other block-level elements as well as inline elements.
      </p>
      
      <h5 className="font-bold text-gray-800 mt-4">Examples:</h5>
      <ul className="list-disc list-inside text-gray-700">
        <li><code className="font-mono">&lt;div&gt;</code>: A general-purpose container for other elements.</li>
        <li><code className="font-mono">&lt;p&gt;</code>: Defines a paragraph.</li>
        <li><code className="font-mono">&lt;h1&gt;, &lt;h2&gt;, ..., &lt;h6&gt;</code>: Heading elements of different levels.</li>
        <li><code className="font-mono">&lt;ol&gt;, &lt;ul&gt;</code>: Ordered and unordered lists.</li>
        <li><code className="font-mono">&lt;table&gt;</code>: Defines a table.</li>
        <li><code className="font-mono">&lt;form&gt;</code>: Used for HTML forms to collect user inputs.</li>
        <li>
          <code className="font-mono">
            &lt;section&gt;, &lt;article&gt;, &lt;nav&gt;, &lt;aside&gt;, &lt;header&gt;, &lt;footer&gt;
          </code>: Semantic elements that define areas of a webpage.
        </li>
      </ul>

      <h4 className="font-bold text-gray-800 mt-6">2. Inline Elements</h4>
      <p className="text-gray-700 mt-2">
        Inline elements do not start on a new line; they appear on the same line as adjacent content, as long as there is space. They only take up as much width as their content requires. Inline elements are typically used within block-level elements to add content or style.
      </p>
      <h5 className="font-bold text-gray-800 mt-4">Examples:</h5>
      <ul className="list-disc pl-6 space-y-1">
        <li><code>&lt;span&gt;</code>: A general-purpose inline container for phrasing content.</li>
        <li><code>&lt;a&gt;</code>: Creates hyperlinks.</li>
        <li><code>&lt;img&gt;</code>: Embeds an image.</li>
        <li><code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code>: Used for strong emphasis and bold text, respectively.</li>
        <li><code>&lt;em&gt;</code>, <code>&lt;i&gt;</code>: Used for emphasis and italic text, respectively.</li>
        <li><code>&lt;br&gt;</code>: Inserts a line break within text.</li>
        <li><code>&lt;input&gt;</code>: Creates interactive controls for forms.</li>
      </ul>
      <div className="bg-gray-100 p-3 mt-4 italic text-gray-700 rounded">
        To know more about Block-Level Elements and Inline Elements, refer to this <a href="#" className="text-red-600 underline">article</a>.
      </div>
      <h3 className="text-lg font-semibold text-red-600 mt-5 mb-5">Best Practices When Using HTML Elements</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-bold">Semantic HTML:</span> Use HTML elements according to their intended purpose. For example, use heading elements for headings, <code>&lt;p&gt;</code> for paragraphs, and <code>&lt;a&gt;</code> for links.
        </li>
        <li>
          <span className="font-bold">Accessibility:</span> Enhance accessibility by using proper elements like <code>&lt;main&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;header&gt;</code>, and <code>&lt;footer&gt;</code>. Also, always include <code>alt</code> text for images.
        </li>
        <li>
          <span className="font-bold">Keep it Simple:</span> Avoid unnecessary complexity in HTML structure. Use the simplest possible elements to achieve the desired layout and functionality.
        </li>
      </ul>
    </div>
    
  );
};

export default HTMLElements;
