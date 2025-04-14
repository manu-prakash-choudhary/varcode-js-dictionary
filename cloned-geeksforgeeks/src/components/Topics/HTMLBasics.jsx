import React from "react";

import { htmlTutorialNew } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { HTMLDocument, HTMLHeadings, HTMLParagraph, HTMLHorizontalLine, HTMLImage } from "../../utils/CodeBlocks";

const HTMLBasics = () => {
  return (
    <div className="content-container overflow-y-auto h-screen px-4 md:pl-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">HTML Basics</h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-800 text-justify text-sm md:text-base">
          HTML (HyperText Markup Language) is the standard markup language for
          creating and structuring web pages.
        </p>
        <br></br>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-700 text-sm md:text-base">
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

        <p className="text-gray-800 text-justify text-sm md:text-base">
          In this guide, we learn the basics of HTML which includes HTML tags (
          &lt;h1&gt;, &lt;p&gt;, &lt;img&gt;, etc), attributes, elements, and
          document structure which collectively form a working web page.
        </p>
      </div>
      
      <div className="my-6">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">Table of contents</h3>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-sm md:text-base">
          <li className="mt-2 text-red-600">
            <a href="#1">Basic HTML Document</a>
          </li>
          <li className="mt-2 text-red-600">
            <a href="#2">HTML Basic Structure</a>
          </li>
          <li className="mt-2 text-red-600">
            <a href="#3">HTML Headings</a>
          </li>
          <li className="mt-2 text-red-600">
            <a href="#4">HTML Paragraph and Break Elements</a>
          </li>
          <li className="mt-2 text-red-600">
            <a href="#5">HTML Horizontal Line</a>
          </li>
          <li className="mt-2 text-red-600">
            <a href="#6">HTML Images</a>
          </li>
          <li className="mt-2 text-red-600">
            <a href="#7">View HTML Source Code</a>
          </li>
        </ul>
      </div>
      
      <div className="text-gray-800">
        <h3 id="1" className="text-xl md:text-2xl font-semibold text-red-600">
          Basic HTML Document
        </h3>
        <p className="mb-4 mt-2 text-sm md:text-base">
          Every HTML document begins with a document type declaration, setting
          the foundation for the webpage. This section introduces basic{" "}
          <a href="#" className="text-red-600 hover:underline">
            HTML tags
          </a>{" "}
          that structure the page, such as{" "}
          <a href="#" className="text-red-600 hover:underline">
            &lt;head&gt;
          </a>
          ,{" "}
          <a href="#" className="text-red-600 hover:underline">
            &lt;body&gt;
          </a>
          , and{" "}
          <a href="#" className="text-red-600 hover:underline">
            &lt;title&gt;
          </a>
          .
        </p>
        <p className="mb-4 text-sm md:text-base">
          Although this is not mandatory, it is a good convention to start the
          document with the below-mentioned tag.
        </p>
        <p className="text-sm md:text-base">
          Below mentioned are the basic HTML tags that divide the whole page
          into various parts like head, body, etc.
        </p>
      </div>
      
      <div className="overflow-x-auto py-4">
        <table className="w-full border border-black shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-900 text-sm md:text-lg font-semibold border border-black">
              <th className="px-2 md:px-6 py-2 md:py-3 border border-black">Tags</th>
              <th className="px-2 md:px-6 py-2 md:py-3 border border-black">Descriptions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                tag: "<html>",
                description:
                  "Encloses the entire HTML document, serving as the root element for all HTML content.",
              },
              {
                tag: "<head>",
                description:
                  "Contains header information about the webpage, including title, meta tags, and linked stylesheets. It is part of the document's structure but is not displayed on the webpage.",
              },
              {
                tag: "<title>",
                description:
                  "Used within the <head> section to define the title of the HTML document. It appears in the browser tab or window and provides a brief description of the webpage's content.",
              },
              {
                tag: "<body>",
                description:
                  "Encloses the visible content of the webpage, such as text, images, audio, videos, and links. All elements within this tag are displayed on the actual webpage when viewed in a browser.",
              },
            ].map((item, index) => (
              <tr
                key={index}
                className="border-b border-black hover:bg-gray-100"
              >
                <td className="px-2 md:px-6 py-2 md:py-3 border border-black text-red-600 font-medium cursor-pointer text-sm md:text-base">
                  {item.tag}
                </td>
                <td className="px-2 md:px-6 py-2 md:py-3 border border-black text-gray-700 text-sm md:text-base">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa]">
        <div className="overflow-x-auto">
          <CopyBlock
            text={HTMLDocument.text}
            language={HTMLDocument.language}
            theme={HTMLDocument.theme}
            wrapLines
          />
        </div>
      </div>
      
      <h2 className="text-base md:text-lg font-semibold mt-4 text-red-600">In this example:</h2>
      <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-700 text-sm md:text-base">
        <li>This HTML document defines a basic webpage with a responsive design using &lt;meta&gt; tags, ensuring it adjusts well to different devices.</li>
        <li>The content includes a paragraph &lt;p&gt; displaying "varCODE is an online study platform," and the title "HTML" appears in the browser tab.</li>
      </ul>
      
      <div className="text-gray-800 flex justify-center flex-col">
        <h3 id="2" className="text-xl md:text-2xl font-semibold text-red-600 mt-5">
          HTML Basic Structure
        </h3>
        <div className="border border-gray-400 rounded-lg p-3 md:p-4 w-full md:w-96 text-xs md:text-sm font-mono align-middle mt-5 mx-auto">
          <p className="text-gray-700">&lt;html&gt;</p>
          
          <div className="ml-3 md:ml-6 border border-gray-400 rounded-md p-2 md:p-3">
            <p className="text-gray-700">&lt;head&gt;</p>
            <div className="ml-3 md:ml-6 border border-gray-400 rounded-md p-1 md:p-2">
              <p className="text-gray-700">&lt;title&gt;Website Title&lt;/title&gt;</p>
            </div>
            <p className="text-gray-700">&lt;/head&gt;</p>
          </div>
          
          <div className="ml-3 md:ml-6 mt-3 border border-gray-400 rounded-md p-2 md:p-3">
            <p className="text-gray-700">&lt;body&gt;</p>
            <div className="ml-3 md:ml-6 border border-gray-400 rounded-md p-1 md:p-2">
              <p className="text-gray-700">&lt;h1&gt;Hello varCODE&lt;/h1&gt;</p>
            </div>
            <div className="ml-3 md:ml-6 border border-gray-400 rounded-md p-1 md:p-2 mt-2">
              <p className="text-gray-700">&lt;h2&gt;HTML Basic Structure&lt;/h2&gt;</p>
            </div>
            <div className="ml-3 md:ml-6 border border-gray-400 rounded-md p-1 md:p-2 mt-2">
              <p className="text-gray-700">&lt;p&gt;Paragraph Tag&lt;/p&gt;</p>
            </div>
            <p className="text-gray-700">&lt;/body&gt;</p>
          </div>
          
          <p className="text-gray-700">&lt;/html&gt;</p>
        </div>
        
        <p className="italic text-gray-500 mt-3 text-center text-sm md:text-base">HTML Structure</p>
      </div>
      
      <div className="text-gray-800">
        <h3 id="3" className="text-xl md:text-2xl font-semibold text-red-600 mt-5">
          HTML Headings
        </h3>
        <p className="mt-3 text-sm md:text-base">The HTML heading tags are used to create headings for the content of a webpage. These tags are typically placed inside the body tag. HTML offers six heading tags, from &lt;h1&gt; to &lt;h6&gt;, each displaying the heading in a different font size.</p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 mt-5 mb-5">Syntax</h2>
        <div className="bg-gray-200 p-4 md:p-6 rounded-lg w-full mt-5 mb-5 overflow-x-auto">
          <pre className="text-gray-800 font-mono text-sm md:text-base">
            {"<h1></h1>\n"}
            {"<h2></h2>\n"}
            {"<h3></h3>\n"}
            {"<h4></h4>\n"}
            {"<h5></h5>\n"}
            {"<h6></h6>\n"}
          </pre>
        </div>
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa]">
          <div className="overflow-x-auto">
            <CopyBlock
              text={HTMLHeadings.text}
              language={HTMLHeadings.language}
              theme={HTMLHeadings.theme}
              wrapLines
            />
          </div>
        </div>
        
        <h2 className="text-base md:text-lg font-semibold mt-4 text-red-600">In this example:</h2>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-700 text-sm md:text-base">
          <li>This code displays six headings (&lt;h1&gt; to &lt;h6&gt;) on the webpage, with &lt;h1&gt; being the largest and most prominent and &lt;h6&gt; being the smallest.</li>
          <li>The headings are used to define text hierarchy and emphasize content based on importance.</li>
        </ul>
      </div>
      
      <div className="text-gray-800">
        <h3 id="4" className="text-xl md:text-2xl font-semibold text-red-600 mt-5">
          HTML Paragraph and Break Elements
        </h3>
        <p className="mt-3 text-sm md:text-base">HTML &lt;p&gt; tags are used to write paragraph statements on a webpage. They start with the &lt;p&gt; tag and end with &lt;/p&gt;. The HTML &lt;br&gt; tag is used to insert a single line break and does not require a closing tag. In HTML, the break tag is written as &lt;br&gt;.</p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 mt-5 mb-5">Syntax</h2>
        <div className="bg-gray-200 p-4 md:p-6 rounded-lg w-full mt-5 mb-5 overflow-x-auto">
          <pre className="text-gray-800 font-mono text-sm md:text-base">
            {"//for Paragraph\n"}
            {"<p>Content...</p>\n"}
            {"//for Break\n"}
            {"<br>\n"}
          </pre>
        </div>
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa]">
          <div className="overflow-x-auto">
            <CopyBlock
              text={HTMLParagraph.text}
              language={HTMLParagraph.language}
              theme={HTMLParagraph.theme}
              wrapLines
            />
          </div>
        </div>
        
        <h2 className="text-base md:text-lg font-semibold mt-4 text-red-600">In this example:</h2>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-700 text-sm md:text-base">
          <li>This HTML code uses a &lt;p&gt; tag to display a paragraph of text, providing an overview of what HTML is and its purpose.</li>
          <li>The &lt;br&gt; tags are used to insert line breaks, making the text more readable by separating each sentence onto a new line within the paragraph.</li>
        </ul>
      </div>
      
      <div className="text-gray-800">
        <h3 id="5" className="text-xl md:text-2xl font-semibold text-red-600 mt-5">
          HTML Horizontal Line
        </h3>
        <p className="mt-3 text-sm md:text-base">The HTML &lt;hr&gt; tag is used to divide a page into sections by creating a horizontal line that spans from the left to the right side of the page. This is an empty tag and does not require a closing tag or any additional attributes.</p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 mt-5 mb-5">Syntax</h2>
        <div className="bg-gray-200 p-4 md:p-6 rounded-lg w-full mt-5 mb-5 overflow-x-auto">
          <pre className="text-gray-800 font-mono text-sm md:text-base">
            {"<hr>\n"}
          </pre>
        </div>
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa]">
          <div className="overflow-x-auto">
            <CopyBlock
              text={HTMLHorizontalLine.text}
              language={HTMLHorizontalLine.language}
              theme={HTMLHorizontalLine.theme}
              wrapLines
            />
          </div>
        </div>
        
        <h2 className="text-base md:text-lg font-semibold mt-4 text-red-600">In this example:</h2>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-700 text-sm md:text-base">
          <li>&lt;h1&gt; to &lt;h6&gt; tags are used to define headings, with &lt;h1&gt; being the largest and &lt;h6&gt; the smallest.</li>
          <li>Each tag displays "Hello World!" in decreasing font sizes, illustrating the hierarchy of headings in HTML.</li>
        </ul>
      </div>
      
      <div className="text-gray-800">
        <h3 id="6" className="text-xl md:text-2xl font-semibold text-red-600 mt-5">
          HTML Images
        </h3>
        <p className="mt-3 text-sm md:text-base">The &lt;img&gt; tag is used to insert an image into a webpage. The source of the image is specified within the src attribute, like this: &lt;img src="source_of_image"&gt;.</p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 mt-5 mb-5">Syntax</h2>
        <div className="bg-gray-200 p-4 md:p-6 rounded-lg w-full mt-5 mb-5 overflow-x-auto">
          <pre className="text-gray-800 font-mono text-sm md:text-base">
            {"<img src='varcode.png'>\n"}
          </pre>
        </div>
        
        <div className="border border-red-400 rounded-2xl w-full bg-[#fafafa]">
          <div className="overflow-x-auto">
            <CopyBlock
              text={HTMLImage.text}
              language={HTMLImage.language}
              theme={HTMLImage.theme}
              wrapLines
            />
          </div>
        </div>
        
        <h2 className="text-base md:text-lg font-semibold mt-4 text-red-600">In this example:</h2>
        <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-700 text-sm md:text-base">
          <li><b>This HTML code uses the &lt;img&gt; tag to display an image on a webpage.</b></li>
          <li>The src attribute specifies the URL of the image, which is loaded and displayed when the page is rendered in the browser.</li>
        </ul>
      </div>
      
      <div className="text-gray-800 mb-8">
        <h3 id="7" className="text-xl md:text-2xl font-semibold text-red-600 mt-5 mb-5">
          View HTML Source Code
        </h3>
        <p className="text-sm md:text-base">While checking a web page, you might want to see the HTML code behind it. Here we will see how you can view HTML source code for the entire page or a specific element.</p>
        <ol className="list-decimal ml-4 md:ml-6 mt-2 text-red-600">
          <li className="text-gray-800 mt-3 text-sm md:text-base"><b>View HTML Source Code of Entire Page</b>
            <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-800 text-sm md:text-base">
              <li>
                To view the source code of a webpage press ctrl + u on the page, or right-click on the page and select the "view page source" option.
              </li>
              <li>
                This will open a new tab that shows the HTML source code for that entire page.
              </li>
            </ul>
          </li>
          <li className="text-gray-800 mt-3 text-sm md:text-base"><b>Inspect an HTML Element on a Page</b>
            <ul className="list-disc ml-4 md:ml-6 mt-2 text-gray-800 text-sm md:text-base">
              <li>
                To check the HTML code for a specific element on a page, right-click on the page and select the "Inspect" option.
              </li>
              <li>
                This lets you see the HTML and CSS behind that element. You can also try making changes and see the changes.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HTMLBasics;