import React from "react";

const HTMLElements = () => {
  // Sample code examples
  const HTMLElementEx = {
    text: `<!DOCTYPE html>\n<html>\n<body>\n\n<p>This is a paragraph.</p>\n\n</body>\n</html>`,
    language: "html",
    theme: "github"
  };

  const HTMLNested = {
    text: `<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Elements Example</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>`,
    language: "html",
    theme: "github"
  };

  const HTMLEmpty = {
    text: `<!DOCTYPE html>\n<html>\n<body>\n\n<h2>Learning HTML</h2>\n<br>\n<p>This is an example of an empty element.</p>\n\n</body>\n</html>`,
    language: "html",
    theme: "github"
  };

  // Custom code block component to replace CopyBlock
  const CodeBlock = ({ text, language }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre className="text-sm md:text-base font-mono">
          {text}
        </pre>
      </div>
    );
  };

  return (
    <div className="content-container overflow-y-auto h-full w-full px-4 md:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">HTML Elements</h1>
        <p className="text-sm text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>

      {/* Introduction Section */}
      <div className="mt-4">
        <p className="text-gray-800">
          An HTML Element consists of a <b>start tag</b>, <b>content</b>, and an{" "}
          <b>end tag</b>, which together define the element's structure and
          functionality. Elements are the basic building blocks of a webpage and
          can represent different types of content, such as text, links, images,
          or headings.
        </p>
        
        <p className="text-gray-800 mt-4">
          For example, the &lt;p&gt; element for paragraphs includes opening and
          closing tags with text content in between.
        </p>
        
        {/* Element Diagram - Made responsive */}
        <div className="w-full mt-6 p-4 border rounded-lg shadow bg-white overflow-x-auto">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 300" 
            className="w-full max-w-lg mx-auto h-auto"
          >
            {/* Text for tags and content */}
            <text x="60" y="40" fontFamily="monospace" fontSize="16">
              &lt;Button&gt;
            </text>
            <text
              x="210"
              y="40"
              fontFamily="sans-serif"
              fontSize="18"
              fill="red"
              fontWeight="bold"
            >
              varCODE
            </text>
            <text x="390" y="40" fontFamily="monospace" fontSize="16">
              &lt;/Button&gt;
            </text>

            {/* Upward arrows */}
            <line
              x1="95"
              y1="50"
              x2="95"
              y2="80"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />
            <line
              x1="250"
              y1="50"
              x2="250"
              y2="80"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />
            <line
              x1="425"
              y1="50"
              x2="425"
              y2="80"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />

            {/* Labels for the parts */}
            <text
              x="90"
              y="100"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Opening Tag
            </text>
            <text
              x="250"
              y="100"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Content
            </text>
            <text
              x="425"
              y="100"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Closing Tag
            </text>

            {/* Horizontal lines connecting opening tag and closing tag */}
            <line
              x1="95"
              y1="150"
              x2="95"
              y2="130"
              stroke="#000"
              strokeWidth="1.5"
            />
            <line
              x1="95"
              y1="150"
              x2="425"
              y2="150"
              stroke="#000"
              strokeWidth="1.5"
            />
            <line
              x1="425"
              y1="150"
              x2="425"
              y2="130"
              stroke="#000"
              strokeWidth="1.5"
            />

            {/* Upward arrow for Element label */}
            <line
              x1="250"
              y1="150"
              x2="250"
              y2="200"
              stroke="#000"
              strokeWidth="1.5"
              markerStart="url(#arrowhead)"
            />
            <text
              x="250"
              y="220"
              fontFamily="sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              Element
            </text>

            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="10 0, 0 3.5, 10 7" fill="#000" />
              </marker>
            </defs>
          </svg>
        </div>
        
        <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
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
        
        <p className="text-gray-800 mt-4">
          In this guide, we learn the basics of HTML which includes HTML tags (
          &lt;h1&gt;, &lt;p&gt;, &lt;img&gt;, etc), attributes, elements, and
          document structure which collectively form a working web page.
        </p>
      </div>
      
      {/* Syntax Section */}
      <div className="mt-8">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">Syntax:</h2>
        <div className="bg-gray-200 text-gray-800 p-3 rounded-md font-mono mt-3 overflow-x-auto">
          &lt;tagname&gt;Your Contents... &lt;/tagname&gt;
        </div>
      </div>
      
      {/* Example Section */}
      <div className="mt-6">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">
          HTML Element Code Example:
        </h2>
        <p className="text-gray-700 mt-2">
          In this example, <code className="text-green-600">&lt;p&gt;</code> is a
          starting tag, <code className="text-green-600">&lt;/p&gt;</code> is an
          ending tag, and it contains some content between the tags, which form an
          element.
        </p>
        <div className="border border-red-400 rounded-lg w-full mt-4 mb-4">
          <CodeBlock 
            text={HTMLElementEx.text}
            language={HTMLElementEx.language}
          />
        </div>
      </div>
      
      {/* Table of Contents */}
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-semibold text-red-600">Table of contents</h2>
        <ul className="mt-3 space-y-2">
          <li className="text-red-600">
            <a href="#key-points" className="hover:">&bull; Some Key Points About HTML Elements</a>
          </li>
          <li className="text-red-600">
            <a href="#nested-elements" className="hover:">&bull; Nested HTML Elements</a>
          </li>
          <li className="text-red-600">
            <a href="#end-tag" className="hover:">&bull; Necessary to Add an End Tag</a>
          </li>
          <li className="text-red-600">
            <a href="#empty-elements" className="hover:">&bull; HTML Empty Element</a>
          </li>
          <li className="text-red-600">
            <a href="#block-inline" className="hover:">&bull; Block-Level Elements and Inline Elements</a>
          </li>
          <li className="text-red-600">
            <a href="#best-practices" className="hover:">&bull; Best Practices When Using HTML Elements</a>
          </li>
        </ul>
      </div>
      
      {/* Key Points Section */}
      <div id="key-points" className="mt-8 scroll-mt-6">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">
          Some Key Points About HTML Elements
        </h2>
        
        <div className="mt-4">
          <h3 className="font-semibold text-red-600">1. Syntax:</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>
              An opening tag indicates where the content begins:{" "}
              <code className="font-mono">&lt;tagname&gt;</code>.
            </li>
            <li>
              A closing tag indicates where the content ends:{" "}
              <code className="font-mono">&lt;/tagname&gt;</code>.
            </li>
            <li>
              The actual content resides between the opening and closing tags.
            </li>
          </ul>
        </div>
        
        <div className="mt-4">
          <h3 className="font-semibold text-red-600">2. Case Sensitivity:</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>
              HTML tags are <strong>not</strong> case-sensitive. For example,{" "}
              <code className="font-mono">&lt;B&gt;</code> and{" "}
              <code className="font-mono">&lt;b&gt;</code> both represent bold text.
            </li>
            <li>
              However, it's a best practice to use lowercase tags for consistency
              and readability.
            </li>
          </ul>
        </div>
      </div>
      
      {/* Nested Elements Section */}
      <div id="nested-elements" className="mt-8 scroll-mt-6">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">
          Nested HTML Elements
        </h2>
        <p className="text-gray-700 mt-2">
          Nested HTML Elements occur when one element is placed inside another,
          creating a hierarchical structure. This structure is crucial for
          organizing content on web pages effectively, ensuring that different
          elements relate logically and visually to each other.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Example:</strong> Here, the{" "}
          <code className="text-red-600">&lt;html&gt;</code> tag contains the{" "}
          <code className="text-red-600">&lt;head&gt;</code> and{" "}
          <code className="text-red-600">&lt;body&gt;</code> tags, forming a
          nested structure.
        </p>
        <div className="border border-red-400 rounded-lg w-full mt-4 mb-4">
          <CodeBlock 
            text={HTMLNested.text}
            language={HTMLNested.language}
          />
        </div>
        <p className="text-gray-700 mt-2">
          Here, the &lt;html&gt; tag contains the &lt;head&gt; and &lt;body&gt;.
          The &lt;head&gt; and &lt;body&gt; tag contain other elements so it is
          called a nested element.
        </p>
      </div>
      
      {/* End Tag Section */}
      <div id="end-tag" className="mt-8 scroll-mt-6">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">
          Necessary to Add an End Tag
        </h2>
        <p className="text-gray-700 mt-2">
          For non-empty HTML elements, if you forget to add a closing or end tag,
          modern browsers may automatically add it in some cases.
        </p>
        <p className="text-gray-700 mt-2">
          However, this can cause issues when you add additional HTML elements
          later on. Therefore, it is best practice to always include the closing
          tag for non-void HTML elements.
        </p>
        <div className="border border-red-400 rounded-lg w-full mt-4 mb-4 overflow-x-auto">
          <CodeBlock 
            text={HTMLNested.text}
            language={HTMLNested.language}
          />
        </div>
      </div>
      
      {/* Empty Elements Section */}
      <div id="empty-elements" className="mt-8 scroll-mt-6">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">
          HTML Empty Element
        </h2>
        <p className="text-gray-700 mt-2">
          HTML Elements without any content i.e., that do not print anything are
          called Empty elements. Empty HTML elements do not have an ending tag.
        </p>
        <p className="text-gray-700 mt-2">
          For instance. &lt;br&gt;, &lt;hr&gt;, &lt;link&gt;,
          &lt;input&gt; etc are HTML elements.
        </p>
        <p className="text-gray-700 mt-3">
          <b>Example:</b> In this example &lt;br&gt; tag doesn't print
          anything. It is used as a line break that breaks the line between
          &lt;h2&gt; and &lt;p&gt; tags.
        </p>
        <div className="border border-red-400 rounded-lg w-full mt-4 mb-4">
          <CodeBlock 
            text={HTMLEmpty.text}
            language={HTMLEmpty.language}
          />
        </div>
      </div>
      
      {/* Block and Inline Elements Section */}
      <div id="block-inline" className="mt-8 scroll-mt-6">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">
          Block-Level Elements and Inline Elements
        </h2>
        <p className="text-gray-700 mt-2">
          In HTML, elements are broadly categorized into two main types based on
          how they display in the document layout: block-level elements and inline
          elements.
        </p>

        <div className="mt-4">
          <h3 className="font-bold text-gray-800">1. Block-Level Elements</h3>
          <p className="text-gray-700 mt-2">
            Block-level elements typically start on a new line and take up the full
            width available to them, regardless of their actual content width. This
            means they stack vertically and can contain other block-level elements
            as well as inline elements.
          </p>

          <h4 className="font-bold text-gray-800 mt-3">Examples:</h4>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>
              <code className="font-mono">&lt;div&gt;</code>: A general-purpose
              container for other elements.
            </li>
            <li>
              <code className="font-mono">&lt;p&gt;</code>: Defines a paragraph.
            </li>
            <li>
              <code className="font-mono">
                &lt;h1&gt;, &lt;h2&gt;, ..., &lt;h6&gt;
              </code>
              : Heading elements of different levels.
            </li>
            <li>
              <code className="font-mono">&lt;ol&gt;, &lt;ul&gt;</code>: Ordered and
              unordered lists.
            </li>
            <li>
              <code className="font-mono">&lt;table&gt;</code>: Defines a table.
            </li>
            <li>
              <code className="font-mono">&lt;form&gt;</code>: Used for HTML forms
              to collect user inputs.
            </li>
            <li className="break-words">
              <code className="font-mono">
                &lt;section&gt;, &lt;article&gt;, &lt;nav&gt;, &lt;aside&gt;,
                &lt;header&gt;, &lt;footer&gt;
              </code>
              : Semantic elements that define areas of a webpage.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-gray-800">2. Inline Elements</h3>
          <p className="text-gray-700 mt-2">
            Inline elements do not start on a new line; they appear on the same line
            as adjacent content, as long as there is space. They only take up as
            much width as their content requires. Inline elements are typically used
            within block-level elements to add content or style.
          </p>
          
          <h4 className="font-bold text-gray-800 mt-3">Examples:</h4>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>
              <code>&lt;span&gt;</code>: A general-purpose inline container for
              phrasing content.
            </li>
            <li>
              <code>&lt;a&gt;</code>: Creates hyperlinks.
            </li>
            <li>
              <code>&lt;img&gt;</code>: Embeds an image.
            </li>
            <li>
              <code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code>: Used for strong
              emphasis and bold text, respectively.
            </li>
            <li>
              <code>&lt;em&gt;</code>, <code>&lt;i&gt;</code>: Used for emphasis and
              italic text, respectively.
            </li>
            <li>
              <code>&lt;br&gt;</code>: Inserts a line break within text.
            </li>
            <li>
              <code>&lt;input&gt;</code>: Creates interactive controls for forms.
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-100 p-3 mt-4 italic text-gray-700 rounded">
          To know more about Block-Level Elements and Inline Elements, refer to
          this{" "}
          <a href="#" className="text-red-600 hover:">
            article
          </a>.
        </div>
      </div>
      
      {/* Best Practices Section */}
      <div id="best-practices" className="mt-8 scroll-mt-6 mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-red-600">
          Best Practices When Using HTML Elements
        </h2>
        <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-3">
          <li>
            <span className="font-bold">Semantic HTML:</span> Use HTML elements
            according to their intended purpose. For example, use heading elements
            for headings, <code>&lt;p&gt;</code> for paragraphs, and{" "}
            <code>&lt;a&gt;</code> for links.
          </li>
          <li>
            <span className="font-bold">Accessibility:</span> Enhance
            accessibility by using proper elements like <code>&lt;main&gt;</code>,{" "}
            <code>&lt;aside&gt;</code>, <code>&lt;header&gt;</code>, and{" "}
            <code>&lt;footer&gt;</code>. Also, always include <code>alt</code>{" "}
            text for images.
          </li>
          <li>
            <span className="font-bold">Keep it Simple:</span> Avoid unnecessary
            complexity in HTML structure. Use the simplest possible elements to
            achieve the desired layout and functionality.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLElements;